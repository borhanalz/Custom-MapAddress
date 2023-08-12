import React from 'react';
import Img from '../../../assets/img/logo.svg';
const Bheader = () => {
    return (
        <div className='w-full bg-primary h-24 text-center'>
                <div className={'inline-block mt-6'}><img src={Img} className='w-28'/></div>
        </div>
    );
};

export default Bheader;
