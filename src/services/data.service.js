import {axiosService} from "./axios.service";


export const dataService = {
    getAllData: () => axiosService.get().then(value => value.data),
}