import React, {FC} from 'react';
import {Ichildren} from "../../../Core/Types/Ichildren";

const Bcontainer:FC<Ichildren> = ({children}) => {
    return (
        <div className='max-w-[1300px] mx-auto mt-5 shadow-md'>
            {children}
        </div>
    );
};

export default Bcontainer;
