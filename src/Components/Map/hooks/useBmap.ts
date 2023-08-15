import { useRef } from "react";
import useConvertCoordToAddress from "../../../Core/Hooks/ReactQuery/useConvertCoordToAddress";
import { useAppSelector } from "../../../Core/Store/store";
import useBmapQuery from "./useBmapQuery";
import { Form } from "antd";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const useBmap = () => {
  const { mutate: getaddress } = useConvertCoordToAddress();

  const [form]=Form.useForm();

  const coordiante: [number, number] = useAppSelector(
    (state) => state.MapReducer.latlng
  );

  const HandelGetAddress = () => {
    getaddress(coordiante);    
  };
  const addressInfo:any= useAppSelector(state=>state.MapReducer.city);  
  const {mutate:postData}=useBmapQuery();
  const navigate = useNavigate();
  const onFinishHandler = (payload:{address_details:string})=>{
      if(addressInfo){
        if(addressInfo!=='تهران') {
          toast.error('فقط شهر تهران قابل ادرس دهی میباشد')
        }else {
          postData();
          toast.success('با موفقیت ثبت شد');
          window.location.replace('https://tipaxco.com/')
        }
      }else{
        toast.error('لطفا ادرس را به درستی وارد کنید')
      }
  }
  return { HandelGetAddress ,onFinishHandler,form};
};
export default useBmap;
