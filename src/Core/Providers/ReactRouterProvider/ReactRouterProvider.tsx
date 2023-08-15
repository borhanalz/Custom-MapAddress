import React, {FC} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Ichildren} from "../../Types/Ichildren";

const ReactRouterProvider:FC<Ichildren> = ({children}) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );
};

export default ReactRouterProvider;
