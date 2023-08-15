import useMutationHook from "../../../Core/Hooks/ReactQuery/Master/useMutationHook";
import customAxios from "../../../Core/Services/Axios/CustomAxios";
import {UseMutationResult} from "@tanstack/react-query";
import {toast} from 'react-toastify'
import {useNavigate} from "react-router";
import useRoute from "../../../Core/Hooks/useRoute";
import {useAppDispatch} from "../../../Core/Store/store";
import {Authenticated} from "../../../Core/Store/Reducers/AuthReducer";
import {type} from "os";
const useContractCodeQuery=()=>{
    const{axiosCustomSettings}=customAxios(process.env.REACT_APP_POST_LOGIN);
    const {route}=useRoute();
    const navigate=useNavigate();
    const dispatch=useAppDispatch();
return useMutationHook(['login'],(data)=>{
    return axiosCustomSettings.post('posts',data).then(res=>res)},{
    onSuccess:(res:any)=>{
        if(res.status===201){
            if(res.config.data==13312516977){
                toast.success('با موفقیت وارد شدید');
                navigate(route.LOCATION.route);
                dispatch(Authenticated({authenticate:true}))
            }else {
                toast.error('کدرهگیری معتبر نمیباشد')
            }
        }
    }
    }
)as UseMutationResult;
}
export default useContractCodeQuery;