import useQueryHook from "./Master/useQueryHook";
import customAxios from "../../Services/Axios/CustomAxios";
import useMutationHook from "./Master/useMutationHook";
import { UseMutationResult } from "@tanstack/react-query";
import IconvertAddress from "../../Types/IconvertAddress";

const useConvertCoordToAddress = () => {
  const config = {
    headers: {
      "x-api-key": process.env.REACT_APP_MAPIR_TOKEN,
    },
  };
  const { axiosCustomSettings } = customAxios(
    process.env.REACT_APP_REVERSE_GEOCODE
  );
  return useMutationHook(
    ["maps"],
    (data: any) => {
      return axiosCustomSettings
        .get(`reverse?lat=${data[0]}&lon=${data[1]}`, config)
        .then((res) => res.data);
    },
    {
      onSuccess: (res) => {
        console.log(res);
      },
    }
  ) as UseMutationResult<IconvertAddress>;
};
export default useConvertCoordToAddress;
