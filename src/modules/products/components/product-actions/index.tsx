"use client"

import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Button } from "@medusajs/ui"
import { isEqual } from "lodash"
import { useParams,useRouter  } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"
import { ProductOption } from "@medusajs/medusa"
import { useIntersection } from "@lib/hooks/use-in-view"
import { addToCart } from "@modules/cart/actions"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/option-select"

import MobileActions from "../mobile-actions"
import ProductPrice from "../product-price"

type ProductActionsProps = {
  product: PricedProduct
  region: Region
  disabled?: boolean
}

export type PriceType = {
  calculated_price: string
  original_price?: string
  price_type?: "sale" | "default"
  percentage_diff?: string
}

// export default function ProductActions({
//   product,
//   region,
//   disabled,
// }: ProductActionsProps) {
//   const [options, setOptions] = useState<Record<string, string>>({})
//   const [isAdding, setIsAdding] = useState(false)
//   const router = useRouter()
//   const countryCode = useParams().countryCode as string

//   const variants = product.variants
//   // const inStockOptions = useMemo(() => {
//   //   const filteredOptions = (product.options || []).map(option => ({
//   //     ...option,
//   //     values: option.values.filter(value =>
//   //       product.variants.some(variant =>
//   //         variant.options?.some(variantOption =>
//   //           variantOption.option_id === option.id &&
//   //           variantOption.value === value.value &&
//   //           (
//   //             !variant.manage_inventory ||
//   //             variant.allow_backorder ||
//   //             (variant.inventory_quantity ?? 0) > 0
//   //           )
//   //         )
//   //       )
//   //     )
//   //   })).filter(option => option.values.length > 0);
  
//   //   return filteredOptions;
//   // }, [product.options, product.variants]);
//   // // initialize the option state
//   useEffect(() => {
//     const optionObj: Record<string, string> = {}

//     for (const option of product.options || []) {
//       Object.assign(optionObj, { [option.id]: undefined })
//     }

//     setOptions(optionObj)
//   }, [product])

//   const variantRecord = useMemo(() => {
//     const map: Record<string, Record<string, string>> = {}
  
//     for (const variant of variants) {
//       if (!variant.id || !variant.options) continue
  
//       const temp: Record<string, string> = {}
  
//       for (const option of variant.options) {
//         temp[option.option_id] = option.value
//       }
  
//       map[variant.id] = temp
//     }
  
//     return map
//   }, [variants])
  
//   const variant = useMemo(() => {
//     const selectedOptions = Object.entries(options).sort()
  
//     for (const variant of variants) {
//       if (!variant.id) continue
  
//       const variantOptions = variantRecord[variant.id]
//       if (!variantOptions) continue
  
//       const variantOptionsEntries = Object.entries(variantOptions).sort()
//       if (JSON.stringify(variantOptionsEntries) === JSON.stringify(selectedOptions)) {
//         return variant
//       }
//     }
//     return undefined
//   }, [options, variantRecord, variants])
  
  
//   // // if product only has one variant, then select it
//   useEffect(() => {
//     if (variants.length === 1 && variants[0].id) {
//       setOptions(variantRecord[variants[0].id])
//     }
//   }, [variants, variantRecord])
//   // useEffect(() => {
//   //   if (inStockOptions.length === 1 && inStockOptions[0].values.length === 1) {
//   //     const onlyOption = inStockOptions[0];
//   //     const onlyValue = onlyOption.values[0];
//   //     setOptions({ [onlyOption.id]: onlyValue.value });
//   //   }
//   // }, [inStockOptions]);

//   // update the options when a variant is selected
//   const updateOptions = (update: Record<string, string>) => {
//     setOptions({ ...options, ...update })
//   }

//   // check if the selected variant is in stock
//   const inStock = useMemo(() => {
//     // If we don't manage inventory, we can always add to cart
//     if (variant && !variant.manage_inventory) {
//       return true
//     }

//     // If we allow back orders on the variant, we can add to cart
//     if (variant && variant.allow_backorder) {
//       return true
//     }

//     // If there is inventory available, we can add to cart
//     if (variant?.inventory_quantity && variant.inventory_quantity > 0) {
//       return true
//     }

//     // Otherwise, we can't add to cart
//     return false
//   }, [variant])

//   const actionsRef = useRef<HTMLDivElement>(null)

//   const inView = useIntersection(actionsRef, "0px")

//   // add the selected variant to the cart
//   const handleAddToCart = async () => {
//     if (!variant?.id) return null

//     setIsAdding(true)
//     router.push('/cart')
//     await addToCart({
//       variantId: variant.id,
//       quantity: 1,
//       countryCode,
//     })

//     setIsAdding(false)
//     router.push('/cart')
//   }
//   console.log(product)
//   const isOutOfStock = !inStock;
//   const isDisabled = !variant || !!disabled || isAdding;
//   const shouldBeRed = isOutOfStock && !isDisabled;

//   return (
  export default function ProductActions({
    product,
    region,
    disabled,
  }: ProductActionsProps) {
    const [options, setOptions] = useState<Record<string, string | undefined>>({})
    const [isAdding, setIsAdding] = useState(false)
    const router = useRouter()
    const countryCode = useParams().countryCode as string
  
    const variants = product.variants || []
  
  // Initialize options state
  useEffect(() => {
    const initialOptions: Record<string, string | undefined> = {}
    for (const option of product.options || []) {
      initialOptions[option.id] = undefined
    }
    setOptions(initialOptions)
  }, [product.options])
  
    // Create a Map of option combinations to variants for quick lookup
    const optionVariantMap = useMemo(() => {
      const map = new Map<string, typeof variants[0]>()
      for (const variant of variants) {
        if (!variant.id || !variant.options) continue
  
        const variantOptions = variant.options.reduce((acc: Record<string, string>, option) => {
          acc[option.option_id] = option.value
          return acc
        }, {})
  
        const key = JSON.stringify(Object.entries(variantOptions).sort())
        map.set(key, variant)
      }
      return map
    }, [variants])
  
    // Find the matching variant based on selected options
    const variant = useMemo(() => {
      const selectedOptions = Object.entries(options).sort()
      const key = JSON.stringify(selectedOptions)
      return optionVariantMap.get(key)
    }, [options, optionVariantMap])
  
    // If product has only one variant, select it by default
    useEffect(() => {
      if (variants.length === 1 && variants[0].id && variants[0].options) {
        const variantOptions = variants[0].options.reduce((acc: Record<string, string>, option) => {
          acc[option.option_id] = option.value
          return acc
        }, {})
        setOptions(variantOptions)
      }
    }, [variants])
  
    // Update the options when a variant is selected
    const updateOptions = (update: Record<string, string>) => {
      setOptions((prevOptions) => ({ ...prevOptions, ...update }))
    }
  
    // Check if the selected variant is in stock
    const inStock = useMemo(() => {
      if (!variant) return false
      // If we don't manage inventory or allow backorder, it's in stock
      if (!variant.manage_inventory || variant.allow_backorder) {
        return true
      }
      // If inventory quantity is greater than zero
      if (variant.inventory_quantity && variant.inventory_quantity > 0) {
        return true
      }
      return false
    }, [variant])
  
    const actionsRef = useRef<HTMLDivElement>(null)
    const inView = useIntersection(actionsRef, "0px")
  
    // Add the selected variant to the cart
    const handleAddToCart = async () => {
      if (!variant?.id) return
      setIsAdding(true)
      router.push('/cart')
      try {
        await addToCart({
          variantId: variant.id,
          quantity: 1,
          countryCode,
        })
        // router.push('/cart')
      } catch (error) {
        // Handle error (e.g., show a notification)
        console.error('Failed to add to cart:', error)
      } finally {
        setIsAdding(false)
      }
    }
  
    const isOutOfStock = !inStock
    const isDisabled = !variant || !!disabled || isAdding
    const shouldBeRed = isOutOfStock && !isDisabled
  
    return (
    <>
      <div className="flex flex-col gap-y-2" ref={actionsRef}>
        <div>
          {product.variants.length > 1 && (
            <div className="flex flex-col gap-y-4">
              {(product.options || []).map((option) => {
              {/* {inStockOptions.map((option) => { */}
                return (
                  <div key={option.id}>
                    <OptionSelect
                      option={option}
                      
                      current={options[option.id] ?? ''}
                      updateOption={updateOptions}
                      title={option.title}
                      data-testid="product-options"
                      disabled={!!disabled || isAdding}
                    />
                  </div>
                )
              })}
              <Divider />
            </div>
          )}
        </div>

        <ProductPrice product={product} variant={variant} region={region} />

        <Button
          onClick={handleAddToCart}
          disabled={isOutOfStock || isDisabled}
          variant="primary"
          className={`w-full h-10 
          ${shouldBeRed ? '!bg-ui-button-danger-pressed' : ''}
            `}
          isLoading={isAdding}
          data-testid="add-product-button"
        >
          {!variant
            ? "Select variant"
            : !inStock
            ? "Out of stock" 
            : "Add to cart"}
        </Button>
        {/* <MobileActions
          product={product}
          variant={variant}
          region={region}
          options={options ?? ''}
          updateOptions={updateOptions}
          inStock={inStock}
          handleAddToCart={handleAddToCart}
          isAdding={isAdding}
          show={!inView}
          optionsDisabled={!!disabled || isAdding}
        /> */}
      </div>
    </>
  )
}
