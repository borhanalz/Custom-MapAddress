import useConvertCoordToAddress from "../../../Core/Hooks/ReactQuery/useConvertCoordToAddress";
import { useAppSelector } from "../../../Core/Store/store";


const useBmap=()=>{
    const {mutate:getaddress}=useConvertCoordToAddress();
    const coordiante = useAppSelector(state=>state.MapReducer.latlng)
    const HandelGetAddress=()=>{
        console.log(coordiante);
        getaddress(coordiante);
        
    }
    return {HandelGetAddress}
}
export default useBmap;