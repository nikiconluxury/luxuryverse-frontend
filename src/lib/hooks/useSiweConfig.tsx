// src/hooks/useSiweConfig.ts

import { useCallback } from 'react'
import { useDisconnect } from '@web3modal/ethers/react'
import { getCsrfToken, signIn, signOut, getSession } from 'next-auth/react'
import type { SIWEVerifyMessageArgs, SIWECreateMessageArgs, SIWESession } from '@web3modal/siwe'
import { createSIWEConfig, formatMessage } from '@web3modal/siwe'
import { mainnet, sepolia } from 'viem/chains'

export const useSiweConfig = () => {
  const { disconnect } = useDisconnect()

  const handleSignOut = useCallback(async () => {
    try {
      disconnect()
      await signOut({
        redirect: false,
        callbackUrl: '/locked-out'
      })
      return true
    } catch (error) {
      return false
    }
  }, [disconnect])

  const siweConfig = createSIWEConfig({
    getMessageParams: async () => ({
      domain: typeof window !== 'undefined' ? window.location.host : '',
      uri: typeof window !== 'undefined' ? window.location.origin : '',
      chains: [mainnet.id, sepolia.id],
      statement: 'Please sign with your account'
    }),
    createMessage: ({ address, ...args }: SIWECreateMessageArgs) => formatMessage(args, address),
    getNonce: async () => {
      const nonce = await getCsrfToken()
      if (!nonce) {
        throw new Error('Failed to get nonce!')
      }
      return nonce
    },
    getSession: async () => {
      const session = await getSession()
      if (!session) {
        throw new Error('Failed to get session!')
      }
      const { address, chainId } = session as unknown as SIWESession
      return { address, chainId }
    },
    verifyMessage: async ({ message, signature }: SIWEVerifyMessageArgs) => {
      try {
        const success = await signIn('credentials', {
          redirect: true,
          message,
          signature,
          callbackUrl: '/us/store'
        })
        return Boolean(success?.ok)
      } catch (error) {
        return false
      }
    },
    signOutOnDisconnect: true,
    signOutOnAccountChange: true,
    signOut: handleSignOut,
  })

  return siweConfig
}