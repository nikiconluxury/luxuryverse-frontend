'use client'

// import { useAccount } from 'wagmi'
export function ConnectButton2() {
  // const { open, close } = useWeb3Modal()


  return (
    <div>
        <w3m-button />
  </div>
  )
}


  // const { isConnecting,isReconnecting  } = useAccount();
  //   // Conditional rendering based on connecting or connected state
  //   if (isReconnecting || isConnecting) {
  //     // Shows a loading text or spinner when connecting
  //     return <div>Loading Wallet . ..</div>;
  //   }


// 'use client'

// import { useWeb3Modal } from '@web3modal/wagmi/react'
// import { useAccount } from 'wagmi'
// import { useRouter } from 'next/navigation'
// import { useEffect } from 'react'
// import { useSession } from 'next-auth/react'

// export function ConnectButton() {
//   const { data: session, status } = useSession();
//   const router = useRouter();
//   useEffect(() => {
//     if (status === "authenticated" && session?.error === 'InsufficientBalance') {
//       router.push('/token-balance');
//     }
//   }, [session, status, router]);

//   if (status === "loading") {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//         <w3m-button />
//   </div>
//   )
// }