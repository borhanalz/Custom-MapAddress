const useRoute = ()=>{
    const route = Object.freeze({
        ROOT:'/',
        NOTFOUND:'/notfound',
        LOCATION:{
            route:`/location`,
            link:"/location"
        }
    })
    return {route}
}
export default useRoute;