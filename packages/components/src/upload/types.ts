
import { ExtractPropTypes } from 'vue'


export const uoloadType = {
    multiple: Boolean,
    accept: String
}

export type LinkProps = ExtractPropTypes<typeof uoloadType>


