import axios from "axios";

const CustomAxios=(base_url:any)=>{
    const AxiosParams = {
        baseURL:base_url,
    }
    const axiosCustomSettings = axios.create(AxiosParams);
    return {axiosCustomSettings}
}
export default CustomAxios;