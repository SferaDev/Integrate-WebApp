import * as type from '../constants/APITypes';
import * as axios from 'axios';

export const cloudinaryUploadImg = ({file, formData}) =>
    new Promise((resolve, reject) => {
        axios({
            url: type.CLOUDINARY_UPLOAD_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-ww-form-urlencoded'
            },
            data: formData,
        }).then((res) => {
            if (res.data) {
                const resultUrl = res.data.secure_url
                if (resultUrl) {
                    resolve(resultUrl)
                }
                else reject()
            }
        }).catch(() => reject())
    })