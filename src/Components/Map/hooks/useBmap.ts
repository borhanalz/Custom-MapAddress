import useConvertCoordToAddress from "../../../Core/Hooks/ReactQuery/useConvertCoordToAddress";
import { useAppSelector } from "../../../Core/Store/store";

const useBmap = () => {
  const { mutate: getaddress } = useConvertCoordToAddress();
  const coordiante: [number, number] = useAppSelector(
    (state) => state.MapReducer.latlng
  );
  const HandelGetAddress = () => {
    getaddress(coordiante);
  };
  return { HandelGetAddress };
};
export default useBmap;
