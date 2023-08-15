import {QueryClient,QueryCache,MutationCache} from "@tanstack/react-query";


const useCustomQueryClient=()=>{
    const CustomQueryClient = new QueryClient({
        queryCache:new QueryCache({
            onError:(res:any)=>{
                console.log(res);
            }
        }),
        mutationCache:new MutationCache({
            onError:(res:any)=>{
                console.log(res)
            }
        })
    });
    return {CustomQueryClient}
}
export default useCustomQueryClient;