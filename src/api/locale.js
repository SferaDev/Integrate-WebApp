import {putApi} from './index';

export const apiSetLanguage = (lang) => new Promise((resolve, reject) => {
    putApi(`/me/language/interface`, {interfaceLanguage: lang}).then(response => {
        if (response.data) {
            const lang = response.data;
            if (lang) {
                resolve(lang);
            }
    }}).catch(e => {
        reject(e)
    }
)
});