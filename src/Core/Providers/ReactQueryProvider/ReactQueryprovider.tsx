import React, {FC} from 'react';
import {QueryClientProvider} from "@tanstack/react-query";
import useCustomQueryClient from "../../Services/ReactQuery/useCustomQueryClient";
import {Ichildren} from "../../Types/Ichildren";

const ReactQueryProvider:FC<Ichildren> = ({children}) => {
    const {CustomQueryClient}=useCustomQueryClient();
    return (
        <QueryClientProvider client={CustomQueryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default ReactQueryProvider;
