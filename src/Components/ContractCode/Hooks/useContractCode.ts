import {Form} from "antd";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router";
import useContractCodeQuery from "./useContractCodeQuery";
import useRoute from "../../../Core/Hooks/useRoute";

const useContractCode = ()=>{
    const navigate = useNavigate();
    const {route}=useRoute();
    const [form]=Form.useForm();
    const {mutate:postLogin,isLoading:postLoading} = useContractCodeQuery();
    const onFinishHandler =(value:{contractcode_input:string})=>{
        postLogin(value.contractcode_input);
        navigate('?'+'ContractCode='+value.contractcode_input)
    }
    return {onFinishHandler,form,postLoading}
}

export default useContractCode;