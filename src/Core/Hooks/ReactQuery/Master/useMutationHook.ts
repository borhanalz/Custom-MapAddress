import {MutationFunction, MutationKey, QueryKey, useMutation, UseMutationOptions} from "@tanstack/react-query";

const useMutationHook=(queryKey:QueryKey,queryFn:MutationFunction,option:UseMutationOptions)=>{
        return useMutation(queryKey,queryFn,{...option})
}
export default useMutationHook;