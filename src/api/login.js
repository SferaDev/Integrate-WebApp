import axios from 'axios';
import {API_HOST} from "./index";

export const apiPostLogin = ({id, password}) =>
    axios.get(`${API_HOST}/login`, {
        params: {
            nif: id,
            password,
        }
    });