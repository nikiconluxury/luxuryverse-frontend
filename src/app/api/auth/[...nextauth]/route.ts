import NextAuth, { NextAuthOptions, User } from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"
import { NextResponse } from 'next/server'
import {
  type SIWESession,
  
  verifySignature,
  getChainIdFromMessage,
  getAddressFromMessage

} from '@web3modal/siwe'
import { RequestInternal } from 'next-auth'
// import { siweConfig } from '../../../../lib/siweConfig'
import { redirect } from 'next/navigation'
export async function checkTokenBalance(walletAddress: string, tokenAddress: string, minimumBalance: number): Promise<{ hasBalance: boolean; actualBalance: string }> {
    const url = `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`;
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    
    const body = JSON.stringify({
        id: 1,
        jsonrpc: "2.0",
        method: "alchemy_getTokenBalances",
        params: [walletAddress, [tokenAddress]]
    });
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: body
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Token balance data:", JSON.stringify(data, null, 2));

        if (data.result && data.result.tokenBalances && data.result.tokenBalances.length > 0) {
            const tokenBalance = data.result.tokenBalances[0].tokenBalance;
            if (tokenBalance === null || tokenBalance === undefined) {
                console.log("Token balance is null or undefined");
                return { hasBalance: false, actualBalance: "0" };
            }

            // Convert hex to decimal
            const balanceRaw = BigInt(tokenBalance);
            
            // Determine decimals based on token address
            let decimals;
            if (tokenAddress.toLowerCase() === "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48".toLowerCase()) {
                // USDC address
                decimals = 6;
            } else {
                // Assume ETH or other 18 decimal token
                decimals = 18;
            }
            
            // Convert raw balance to token amount
            const balance = Number(balanceRaw) / (10 ** decimals);
            
            console.log(`Actual balance: ${balance}, Minimum required: ${minimumBalance}`);
            return { 
                hasBalance: balance >= minimumBalance, 
                actualBalance: balance.toFixed(decimals)  // Keep full precision
            };
        } else {
            console.log("No token balance found or unexpected data structure");
            return { hasBalance: false, actualBalance: "0" };
        }
    } catch (error) {
        console.error("Error checking token balance:", error);
        return { hasBalance: false, actualBalance: "0" };
    }
}
declare module 'next-auth' {
    interface Session {
      address: string
      chainId: number
      tokenBalance?: string
      hasRequiredBalance?: boolean
      insufficientBalance?: boolean
    }

    interface User {
      address: string
      chainId: number
      tokenBalance?: string
      hasRequiredBalance?: boolean
      insufficientBalance?: boolean
      error?: string
  }
}
declare module "next-auth/jwt" {
    interface JWT {
      address: string
      chainId: number
      tokenBalance?: string
      hasRequiredBalance?: boolean
      insufficientBalance?: boolean
    }
  }



const nextAuthSecret = process.env.NEXTAUTH_SECRET
if (!nextAuthSecret) {
  throw new Error('NEXTAUTH_SECRET is not set')
}

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
if (!projectId) {
  throw new Error('NEXT_PUBLIC_PROJECT_ID is not set')
}

export const authOptions: NextAuthOptions = {
  secret: nextAuthSecret,
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Ethereum',
      credentials: {
        message: {
          label: 'Message',
          type: 'text',
          placeholder: '0x0'
        },
        signature: {
          label: 'Signature',
          type: 'text',
          placeholder: '0x0'
        }
      },
    async authorize(
      credentials: Record<"message" | "signature", string> | undefined,
      req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
    ): Promise<User | null> {
      try {
        if (!credentials?.message) {
          console.error("Message or signature is missing from credentials");
          return null;
        }
        const { message, signature } = credentials
        const address = getAddressFromMessage(message)
        const chainId = getChainIdFromMessage(message)
        const isValid = await verifySignature({ address, message, signature, chainId, projectId })
        if (isValid) {
          console.log('Signature is valid')
          // Check token ownership and balance
          const requiredTokenAddress = process.env.NEXT_PUBLIC_REQUIRED_TOKEN_ADDRESS
          const minimumBalance = Number(process.env.NEXT_PUBLIC_MINIMUM_TOKEN_BALANCE)
          
          if (!requiredTokenAddress || isNaN(minimumBalance)) {
            throw new Error('Token configuration error')
          }

          const { hasBalance, actualBalance } = await checkTokenBalance(address, requiredTokenAddress, minimumBalance)
          console.log('Has required balance:', hasBalance)
          console.log('Actual balance:', actualBalance)
          if (!hasBalance) {
            console.error('Insufficient balance')
            return {     id: `${chainId}:${address}`,
              address,
              chainId: Number(chainId),             tokenBalance: actualBalance,
              hasRequiredBalance: hasBalance, error: 'InsufficientBalance' };
          }
          return {
            id: `${chainId}:${address}`,
            address,
            chainId: Number(chainId),
            tokenBalance: actualBalance,
            hasRequiredBalance: hasBalance
          };


        } 
        // return null
          return { id: `${chainId}:${address}`, address, chainId: Number(chainId), error: 'Invalid signature' };
        }
        
        catch (e) {
          console.error('Authorization error:', e);
          return null;
      }
    }},),
],
callbacks: {
  // async redirect({ url, baseUrl }) {
  //   // Allows relative callback URLs
  //   if (url.startsWith("/")) return `${baseUrl}${url}`
  //   // Allows callback URLs on the same origin
  //   else if (new URL(url).origin === baseUrl) return url
  //   return baseUrl
  // },
  
  async signIn({ user, account, profile, email, credentials }) {
    if (user?.error) {
      if (user.error === 'InsufficientBalance') {
        console.log('Redirecting to token balance page')
        // Redirect to a custom page explaining the balance issue
        return `/us/token-balance?balance=${user?.tokenBalance}`;
      }
      // if (user.error === 'Invalid signature') {
      //   // Redirect to a custom page explaining the signature issue
      //   return '/us/invalid-signature';
      // }
    }
    return true;
  }

,
  async jwt({ token, user }) {
    if (user) {
      token.address = user.address;
      token.chainId = user.chainId;
      token.tokenBalance = user.tokenBalance;
      token.hasRequiredBalance = user.hasRequiredBalance;
    }
    return token;
  },
  async session({ session, token }) {
    if (token) {
      console.log(token)
      session.address = token.address;
      session.chainId = token.chainId;
      session.tokenBalance = token.tokenBalance;
      session.hasRequiredBalance = token.hasRequiredBalance;
    }
    return session;
  },
},

debug: process.env.NODE_ENV === 'development',
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }