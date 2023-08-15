import React, {useEffect} from 'react';
import useRoute from "../Hooks/useRoute";
import ContractCode from "../../Pages/ContractCodePage/ContractCode";
import Location from "../../Pages/Location/Location";
import {Route, Routes} from "react-router";
import {useSelector} from "react-redux";
import {useAppSelector} from "../Store/store";

const MainRoutes = () => {
    const AuthenticateStatus = useAppSelector(state=>state.AuthReducer.authenticate);
    const {route}=useRoute();
    const publicRoute = [
        {
            path:route.ROOT,
            element:<ContractCode/>
        }
    ]
    const privateRoute = [
        {
            path:route.LOCATION.route,
            element:<Location/>
        }
    ]

    return (
        <>
            {/*<Routes>*/}
            {/*    {AuthenticateStatus ?  privateRoute?.map((route)=>{*/}
            {/*        return <Route key={route.path} path={route.path} element={route.element}></Route>*/}
            {/*    }): publicRoute?.map((route)=>{*/}
            {/*        return <Route key={route.path} path={route.path} element={route.element}></Route>*/}
            {/*    })}*/}
            {/*</Routes>*/}
            <Location/>
        </>
    );
};

export default MainRoutes;
