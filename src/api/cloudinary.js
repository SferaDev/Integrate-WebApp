import * as axios from 'axios';

export const cloudinaryUploadImg = ({file}) =>
    new Promise((resolve, reject) => {
        console.log(process.env.REACT_APP_CLOUDINARY_API_SECRET)
        const timestamp = new Date().getTime();
        const api_key = process.env.REACT_APP_CLOUDINARY_API_KEY;
        let sha1 = require('sha1');
        const signature = sha1('timestamp=' + timestamp + process.env.REACT_APP_CLOUDINARY_API_SECRET);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('timestamp', timestamp);
        formData.append('api_key', api_key);
        formData.append('signature', signature);

        axios({
            url: process.env.REACT_APP_CLOUDINARY_UPLOAD_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-ww-form-urlencoded'
            },
            data: formData,
        }).then((res) => {
            if (res.data) {
                const resultUrl = res.data.secure_url;
                if (resultUrl) resolve(resultUrl);
                else reject();
            }
        }).catch(() => reject());
    });