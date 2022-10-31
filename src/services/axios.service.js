import axios from "axios";

import MY_TOKEN from "../constants/token";
import baseURL from "../constants/base.url";


export const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${MY_TOKEN}`
    }
});