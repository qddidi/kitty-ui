
import { ExtractPropTypes } from 'vue'


export const uploadType = {
    multiple: Boolean,
    accept: String,
    drag: Boolean
}

export type UploadType = ExtractPropTypes<typeof uploadType>


