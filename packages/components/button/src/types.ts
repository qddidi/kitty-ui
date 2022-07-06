
import { ExtractPropTypes } from 'vue'


export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger';

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';


type buttonProps = {
  type: ButtonType,
  size: ButtonSize
}

export type ButtonProps = ExtractPropTypes<buttonProps>

export declare const Button: any
