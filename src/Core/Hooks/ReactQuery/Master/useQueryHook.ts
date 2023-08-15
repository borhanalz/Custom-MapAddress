import {QueryFunction, QueryKey, useQuery, UseQueryOptions} from "@tanstack/react-query";


const useQueryHook = (queryKey:QueryKey,queryFn:QueryFunction,opt:UseQueryOptions={})=>{
return useQuery(queryKey,queryFn,{...opt})
}
export default useQueryHook;