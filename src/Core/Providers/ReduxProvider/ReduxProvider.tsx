import React, {FC} from 'react';
import {Provider} from "react-redux";
import {Store} from "../../Store/store";
import {Ichildren} from "../../Types/Ichildren";

const ReduxProvider:FC<Ichildren> = ({children}) => {
    return (
        <Provider store={Store}>
            {children}
        </Provider>
    );
};

export default ReduxProvider;
