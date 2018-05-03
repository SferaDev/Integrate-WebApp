import * as type from '../constants/APITypes';
import * as axios from 'axios';

export const cloudinaryUploadImg = ({file}) =>
    new Promise((resolve, reject) => {
        const timestamp = new Date().getTime()
        console.log(timestamp)
        const api_key = type.CLOUDINARY_API_KEY
        let sha1 = require('sha1')
        const signature = sha1('timestamp=' + timestamp + type.CLOUDINARY_API_SECRET)
        console.log(signature)

        const formData = new FormData()
        formData.append('file', file)
        formData.append('timestamp', timestamp)
        formData.append('api_key', api_key)
        formData.append('signature', signature)

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