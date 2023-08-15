import { useForm } from "antd/es/form/Form";
import useMutationHook from "../../../Core/Hooks/ReactQuery/Master/useMutationHook";
import CustomAxios from "../../../Core/Services/Axios/CustomAxios";
import { Form } from "antd";

const useBmapQuery=()=>{
    const {axiosCustomSettings}=CustomAxios(process.env.REACT_APP_POST_LOGIN);
       return useMutationHook(['submit'],()=>{
           return axiosCustomSettings.post('posts').then(res=>res);
        },{
            onSuccess(res) {
                console.log(res);
            },
            onError(res){
                console.log(res);
                
            }
        });
}
export default useBmapQuery;