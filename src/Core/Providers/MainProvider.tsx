import React, {FC, ReactNode} from 'react';
import Bheader from "../../Components/Layout/HeaderLayout/Bheader";
import {Interface} from "readline";

interface Imainprovider {
    children:ReactNode
}
const MainProvider:FC<Imainprovider> = ({children}) => {
    return (
        <>
           <Bheader/>
            {children}
        </>
    );
};

export default MainProvider;
