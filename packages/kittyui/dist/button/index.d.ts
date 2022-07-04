import { ExtractPropTypes } from 'vue';

declare type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger';
declare type ButtonSize = 'large' | 'normal' | 'small' | 'mini';
declare type buttonProps = {
    type: ButtonType;
    size: ButtonSize;
};
declare type ButtonProps = ExtractPropTypes<buttonProps>;

export { ButtonProps, ButtonSize, ButtonType };
