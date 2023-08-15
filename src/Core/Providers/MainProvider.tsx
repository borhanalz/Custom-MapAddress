import React, {FC, ReactNode} from 'react';
import Bheader from "../../Components/Layout/HeaderLayout/Bheader";
import {Interface} from "readline";
import {Ichildren} from "../Types/Ichildren";
import Bcontainer from "../../Components/Layout/Container/Bcontainer";
import Bfooter from "../../Components/Layout/FooterLayout/Bfooter";
import ReactRouterProvider from "./ReactRouterProvider/ReactRouterProvider";
import ReactQueryProvider from "./ReactQueryProvider/ReactQueryprovider";
import {ToastContainer} from "react-toastify";
import ReduxProvider from "./ReduxProvider/ReduxProvider";

const MainProvider:FC<Ichildren> = ({children}) => {
    return (
        <>
               <ReactQueryProvider>
                   <ReduxProvider>
                       <Bheader/>
                       <Bcontainer>
                           {children}
                           <ToastContainer/>
                       </Bcontainer>
                       <Bfooter/>
                   </ReduxProvider>
               </ReactQueryProvider>
        </>
    );
};

export default MainProvider;
