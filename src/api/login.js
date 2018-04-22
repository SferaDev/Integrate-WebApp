import axios from 'axios';
import {API_HOST} from "./index";

export const apiPostLogin = ({id, password}) =>
    new Promise((resolve, reject) => {
        axios.get(`${API_HOST}/login`, {
            params: {
                nif: id,
                password,
            }
        }).then(response  => {
            if (response.data) {
                const {token} = response.data;
                if (token)
                    resolve(token);
                else
                    reject();
            }
        }).catch(() => reject());
    });