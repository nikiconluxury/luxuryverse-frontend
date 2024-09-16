import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import { CartWithCheckoutStep } from "types/global"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import { Customer } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
const CartTemplate = ({
  cart,
  customer,
}: {
  cart: CartWithCheckoutStep | null
  customer: Omit<Customer, "password_hash"> | null
}) => {

  return (
    // <div className="">
              <div className="hero-wrapper hero-1-cart py-40">
    <div className="hero-bg-gradient-cart">
    </div>
    <div className="ripple-shape-cart">
       <span className="ripple-1-cart"></span>
       <span className="ripple-2-cart"></span>
       <span className="ripple-3-cart"></span>
       <span className="ripple-4-cart"></span>
       <span className="ripple-5-cart"></span>
    </div>

      <div className="content-container" data-testid="cart-container">
      {/* <LocalizedClientLink
            href="/store"
            className="text-small-semi text-white flex items-center gap-x-2 uppercase flex-1 basis-0"
            data-testid="back-to-cart-link"
          >
      <ChevronDown className="rotate-90" size={16} />
      <span className="mt-px block small:hidden txt-compact-plus text-white hover:text-ui-fg-interactive">
              Back
            </span>
      </LocalizedClientLink> */}
        {cart?.items.length ? (
          <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-40">
            <div className="flex flex-col bg-transparent py-6 gap-y-6">
            {/* <div className="flex flex-col bg-white py-6 gap-y-6"> */}
              {/* {!customer && (
                <>
                  <SignInPrompt />
                  <Divider />
                </>
              )} */}
              <ItemsTemplate region={cart?.region} items={cart?.items} />
            </div>
            <div className="relative">
              <div className="flex flex-col gap-y-8 sticky top-12">
                {cart && cart.region && (
                  <>
                              {/* <div className="bg-white py-6"> */}
                    <div className="bg-transparent py-6">
                      <Summary cart={cart} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <EmptyCartMessage />
          </div>
        )}
      </div>
    </div>
  )
}

export default CartTemplate
