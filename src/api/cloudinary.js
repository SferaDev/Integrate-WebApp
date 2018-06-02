import {postCloudinary} from './index';

export const cloudinaryUploadImg = ({file}) =>
    new Promise((resolve, reject) => {
        const timestamp = new Date().getTime();
        const api_key = process.env.REACT_APP_CLOUDINARY_API_KEY;
        let sha1 = require('sha1');
        const signature = sha1('timestamp=' + timestamp + process.env.REACT_APP_CLOUDINARY_API_SECRET);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('timestamp', timestamp);
        formData.append('api_key', api_key);
        formData.append('signature', signature);

        postCloudinary(formData).then((res) => {
            if (res.data) {
                const resultUrl = res.data.secure_url;
                if (resultUrl) resolve(resultUrl);
            }
        }).catch(e => {
            reject(e)
        })
    })