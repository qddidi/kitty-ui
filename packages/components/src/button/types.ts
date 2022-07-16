
import { ExtractPropTypes } from 'vue'


export const ButtonType = ['primary', 'success', 'info', 'warning', 'danger']

export const ButtonSize = ['large', 'normal', 'small', 'mini'];


export const buttonProps = {
  type: {
    type: String,
    validator(value: string) {

      return ButtonType.includes(value)
    },
    values: 'default'
  },
  plain: Boolean,
  round: Boolean,
  size: {
    type: String,
    values: ButtonSize
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>


