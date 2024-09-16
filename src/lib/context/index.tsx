// context/index.tsx
'use client'

// import { siweConfig } from '@lib/siweConfig'
import { siweConfig } from '@lib/siweConfig'
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
if (!projectId) throw new Error('Project ID is not defined')
// Use the hook to get the siweConfig

const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/kgiJMEURTUiZKYdIB1rviRKFa3mQPdnz'
}

const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'http://localhost:8000',
  icons: ['https://avatars.mywebsite.com/']
}

const ethersConfig = defaultConfig({
  metadata,
  enableEIP6963: true,
  enableInjected: true,
  enableCoinbase: true,
  rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/kgiJMEURTUiZKYdIB1rviRKFa3mQPdnz',
  defaultChainId: 1,
  auth: {
    email: false ,
    socials: false as any,
    showWallets: true, // default to true
    walletFeatures: true // default to true
  }
})

createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: false,
  siweConfig,

})
interface RootLayoutProps {
  children: React.ReactNode;
}

export function AppKit({ children }: RootLayoutProps) {
  return children
}