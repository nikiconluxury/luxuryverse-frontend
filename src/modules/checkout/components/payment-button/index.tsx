"use client"

import { Cart, PaymentSession } from "@medusajs/medusa"
import { Button } from "@medusajs/ui"
import { OnApproveActions, OnApproveData } from "@paypal/paypal-js"
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"
import { useElements, useStripe } from "@stripe/react-stripe-js"
import { placeOrder } from "@modules/checkout/actions"
import React, { useState ,useEffect} from "react"
import ErrorMessage from "../error-message"
import Spinner from "@modules/common/icons/spinner"
import { useCart } from "medusa-react"
import QRCode from "react-qr-code";
type PaymentButtonProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
  "data-testid": string
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  cart,
  "data-testid": dataTestId,
}) => {
  const notReady =
    !cart ||
    !cart.shipping_address ||
    !cart.billing_address ||
    !cart.email ||
    cart.shipping_methods.length < 1
      ? true
      : false

  const paidByGiftcard =
    cart?.gift_cards && cart?.gift_cards?.length > 0 && cart?.total === 0

  if (paidByGiftcard) {
    return <GiftCardPaymentButton />
  }

  const paymentSession = cart.payment_session as PaymentSession

  switch (paymentSession.provider_id) {
    case "stripe":
      return (
        <StripePaymentButton
          notReady={notReady}
          cart={cart}
          data-testid={dataTestId}
        />
      )
    case "manual":
      return (
        <ManualTestPaymentButton notReady={notReady} data-testid={dataTestId} />
      )
    case "paypal":
      return (
        <PayPalPaymentButton
          notReady={notReady}
          cart={cart}
          data-testid={dataTestId}
        />
      )
    case "cryptapi":
      return (
        <EthereumPaymentButton
          notReady={notReady}
          cart={cart}
          data-testid={dataTestId}
        />
      )
    default:
      return <Button disabled>Select a payment method</Button>
  }
}

const GiftCardPaymentButton = () => {
  const [submitting, setSubmitting] = useState(false)

  const handleOrder = async () => {
    setSubmitting(true)
    await placeOrder()
  }

  return (
    <Button
      onClick={handleOrder}
      isLoading={submitting}
      data-testid="submit-order-button"
    >
      Place order
    </Button>
  )
}

const StripePaymentButton = ({
  cart,
  notReady,
  "data-testid": dataTestId,
}: {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
  notReady: boolean
  "data-testid"?: string
}) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onPaymentCompleted = async () => {
    await placeOrder().catch(() => {
      setErrorMessage("An error occurred, please try again.")
      setSubmitting(false)
    })
  }

  const stripe = useStripe()
  const elements = useElements()
  const card = elements?.getElement("card")

  const session = cart.payment_session as PaymentSession

  const disabled = !stripe || !elements ? true : false

  const handlePayment = async () => {
    setSubmitting(true)

    if (!stripe || !elements || !card || !cart) {
      setSubmitting(false)
      return
    }

    await stripe
      .confirmCardPayment(session.data.client_secret as string, {
        payment_method: {
          card: card,
          billing_details: {
            name:
              cart.billing_address.first_name +
              " " +
              cart.billing_address.last_name,
            address: {
              city: cart.billing_address.city ?? undefined,
              country: cart.billing_address.country_code ?? undefined,
              line1: cart.billing_address.address_1 ?? undefined,
              line2: cart.billing_address.address_2 ?? undefined,
              postal_code: cart.billing_address.postal_code ?? undefined,
              state: cart.billing_address.province ?? undefined,
            },
            email: cart.email,
            phone: cart.billing_address.phone ?? undefined,
          },
        },
      })
      .then(({ error, paymentIntent }) => {
        if (error) {
          const pi = error.payment_intent

          if (
            (pi && pi.status === "requires_capture") ||
            (pi && pi.status === "succeeded")
          ) {
            onPaymentCompleted()
          }

          setErrorMessage(error.message || null)
          return
        }

        if (
          (paymentIntent && paymentIntent.status === "requires_capture") ||
          paymentIntent.status === "succeeded"
        ) {
          return onPaymentCompleted()
        }

        return
      })
  }

  return (
    <>
      <Button
        disabled={disabled || notReady}
        onClick={handlePayment}
        size="large"
        isLoading={submitting}
        data-testid={dataTestId}
      >
        Place order
      </Button>
      <ErrorMessage
        error={errorMessage}
        data-testid="stripe-payment-error-message"
      />
    </>
  )
}

const PayPalPaymentButton = ({
  cart,
  notReady,
  "data-testid": dataTestId,
}: {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
  notReady: boolean
  "data-testid"?: string
}) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onPaymentCompleted = async () => {
    await placeOrder().catch(() => {
      setErrorMessage("An error occurred, please try again.")
      setSubmitting(false)
    })
  }

  const session = cart.payment_session as PaymentSession

  const handlePayment = async (
    _data: OnApproveData,
    actions: OnApproveActions
  ) => {
    actions?.order
      ?.authorize()
      .then((authorization) => {
        if (authorization.status !== "COMPLETED") {
          setErrorMessage(`An error occurred, status: ${authorization.status}`)
          return
        }
        onPaymentCompleted()
      })
      .catch(() => {
        setErrorMessage(`An unknown error occurred, please try again.`)
        setSubmitting(false)
      })
  }

  const [{ isPending, isResolved }] = usePayPalScriptReducer()

  if (isPending) {
    return <Spinner />
  }

  if (isResolved) {
    return (
      <>
        <PayPalButtons
          style={{ layout: "horizontal" }}
          createOrder={async () => session.data.id as string}
          onApprove={handlePayment}
          disabled={notReady || submitting || isPending}
          data-testid={dataTestId}
        />
        <ErrorMessage
          error={errorMessage}
          data-testid="paypal-payment-error-message"
        />
      </>
    )
  }
}

const ManualTestPaymentButton = ({ notReady }: { notReady: boolean }) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onPaymentCompleted = async () => {
    await placeOrder().catch((err) => {
      setErrorMessage(err.toString())
      setSubmitting(false)
    })
  }

  const handlePayment = () => {
    setSubmitting(true)

    onPaymentCompleted()
  }

  return (
    <>
      <Button
        disabled={notReady}
        isLoading={submitting}
        onClick={handlePayment}
        size="large"
        data-testid="submit-order-button"
      >
        Place order
      </Button>
      <ErrorMessage
        error={errorMessage}
        data-testid="manual-payment-error-message"
      />
    </>
  )
}
const EthereumPaymentButton = ({
  cart,
  notReady,
  "data-testid": dataTestId,
}: {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
  notReady: boolean
  "data-testid"?: string
}) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [paymentData, setPaymentData] = useState<any>(null)
  const [timeLeft, setTimeLeft] = useState<number | null>(null)
  const session = cart.payment_session as PaymentSession
  const convertToDecimal = (amount: unknown): number => {
    if (typeof amount !== 'number' || isNaN(amount) || !isFinite(amount)) {
      throw new Error("Input must be a valid number");
    }
    const rounded = Math.floor(amount);
    return Number((rounded / 100).toFixed(2));}
  const onPaymentCompleted = async () => {
    await placeOrder().catch(() => {
      setErrorMessage("An error occurred, please try again.")
      setSubmitting(false)
    })
  }

  const handlePayment = async () => {
    setSubmitting(true)
    try {
      if (!session || !session.data) {
        throw new Error('Payment session is not available')
      }
      console.log(session.data)
      
      const amount = convertToDecimal(session.data.amount)
      console.log(amount)
      const address_in  = '0xD97B5d963d81012FD9ef6A55Fd4fDe3eCACaBF6E'
      const expires_at = new Date(Date.now() + 60 * 60 * 1000).toISOString()
      if (!address_in || !amount || !expires_at) {
        throw new Error('Invalid payment session data')
      }

      setPaymentData({ address_in, amount })
      setErrorMessage("WARNING: This site is currently in development. Any transactions made or funds submitted may be lost.")
      const expirationTime = new Date(expires_at).getTime()
      const currentTime = Date.now()
      
      if (expirationTime > currentTime) {
        setTimeLeft(Math.floor((expirationTime - currentTime) / 1000))
      } else {
        throw new Error('Payment session has expired')
      }
    } catch (error) {
      setErrorMessage(errorMessage || 'Payment initiation failed')
    } finally {
      setSubmitting(false)
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (timeLeft !== null && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime !== null && prevTime > 0 ? prevTime - 1 : 0))
      }, 1000)
    } else if (timeLeft === 0) {
      setErrorMessage('Payment time expired')
      setPaymentData(null)
    }
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [timeLeft])

  useEffect(() => {
    let checkPaymentStatus: NodeJS.Timeout
    if (paymentData && session?.id) {
      checkPaymentStatus = setInterval(async () => {
        try {
          const response = await fetch(`/api/check-eth-payment-status/${session.id}`)
          const data = await response.json()
          if (data.status === 'paid') {
            clearInterval(checkPaymentStatus)
            await onPaymentCompleted()
          }
        } catch (error) {
          console.error('Error checking payment status:', error)
        }
      }, 10000) // Check every 10 seconds
    }
    return () => {
      if (checkPaymentStatus) clearInterval(checkPaymentStatus)
    }
  }, [paymentData, session?.id])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  if (paymentData) {
    return (
      <div className="flex flex-col items-center space-y-4">
        <QRCode value={`ethereum:${paymentData.address_in}?amount=${paymentData.amount}`} size={256} />
        <p className="text-lg font-semibold text-white">Send {paymentData.amount} ETH to:</p>
        <p className="text-sm break-all">{paymentData.address_in}</p>
        <p className="text-md text-white">Time remaining: {formatTime(timeLeft || 0)}</p>
        <ErrorMessage
          error={errorMessage}
        />
      </div>
    )
  }

  return (
    <div className="w-full">
      <Button
        disabled={notReady || submitting}
        onClick={handlePayment}
        size="large"
        isLoading={submitting}
        className="w-full"
        data-testid={dataTestId}
      >
        Pay with Ethereum
      </Button>
      <ErrorMessage
        error={errorMessage}
      />
    </div>
  )
}
export default PaymentButton
