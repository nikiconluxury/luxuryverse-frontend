// "use client"
// // pages/token-balance.tsx (assuming standard hooks are available)
// import { useSearchParams } from 'next/navigation'; // Hypothetical import if available
// // import { Metadata } from "next"
// // export const metadata: Metadata = {
// //   title: "Insufficient Balance",
// //   description: "Shop Access Denied, Insufficient Balance",
// // }

// export default function TokenBalancePage() {
//   const searchParams = useSearchParams()

//   const balance = searchParams.get('balance') || 'none';

//   return (
//     <div className='center'>
//       <h1>Token Balance Page</h1>
//       <p>Your current token balance is: {balance ?? 'Loading...'}</p>
//       <h1>Insufficient balance to proceed</h1>
//       <p>Purchase ca to meet min</p>

//     </div>
//   );
// }
import { Metadata } from "next"
import SwapComponent from './SwapComponent'  // adjust the import path as needed

export const metadata: Metadata = {
  title: "Insufficient Token Balance | Exclusive Shopping",
  description: "Your current token balance is insufficient for shopping. Purchase more tokens to continue.",
}

export default function Page() {
  return <SwapComponent />
}