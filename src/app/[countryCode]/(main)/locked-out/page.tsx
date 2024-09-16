import { Metadata } from "next"
import LockedOut from './LockedOut'
export const metadata: Metadata = {
  title: "Access Restricted | Exclusive Shopping",
  description: "Connect your wallet to access exclusive shopping offers.",
}

export default function Page() {
  return ( 
  
  <LockedOut />
)
}
// import InteractiveLink from "@modules/common/components/interactive-link"

// export const metadata: Metadata = {
//   title: "Shop Access Denied",
//   description: "Shop Access Denied",
// }
// export default function LockedOut() {
//   return (
//     <div className="flex flex-col items-center justify-center py-16">
//       <h1 className="text-4xl font-bold mb-4"> You are signed out, connect your wallet to proceed</h1>
//       <br />
//       <br />
//       <br />
//       <br />
//       <p className="text-xl mb-8">You do not qualify to shop <br></br> Exclusive!</p>
//       <br />
//       <br />
//       <br />
// {/* 
//       <p className="text-lg">Use the &quot;Connect Wallet&quot; button in the navigation bar above / then sign signature in wallet (sign in).</p> */}
//       <br />      <br />
//       <br />
//       <br />
//       <br />      <br />
//       <br />
//       <br />
//       <br />
//     </div>
//   )
// }


