import { ProductOption } from "@medusajs/medusa"
import { clx } from "@medusajs/ui"
import React from "react"

import { onlyUnique } from "@lib/util/only-unique"

type OptionSelectProps = {
  option: ProductOption
  current: string
  updateOption: (option: Record<string, string>) => void
  title: string
  disabled: boolean
  "data-testid"?: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
}) => {
  const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-sm text-white">Select {title}</span>
      <div
        // className="flex flex-wrap justify-between gap-2"
        className="grid grid-cols-3 gap-2"
        data-testid={dataTestId}
      >
        {filteredOptions.map((v) => {
          return (
            <button
              onClick={() => updateOption({ [option.id]: v })}
              key={v}
              className={clx(
                "bg-ui-bg-subtle text-small-regular h-10 rounded-rounded p-2 flex-1 ",
                {
                  // "border-ui-border-interactive bg-ui-button-inverted": v === current,
                  "text-ui-fg-on-inverted bg-ui-button-inverted-hover focus:shadow-buttons-inverted border-ui-border-loud focus:outline-none": v === current,
                  // "hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150":
                  //   v !== current,
                }
              )}
              disabled={disabled}
              data-testid="option-button"
            >
              {v}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect
