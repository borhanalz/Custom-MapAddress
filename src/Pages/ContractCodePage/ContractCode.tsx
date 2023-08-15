import React, {useEffect, useState} from 'react';
import Img from '../../assets/img/undraw_delivery_address_re_cjca.svg'

import useContractCode from "../../Components/ContractCode/Hooks/useContractCode";
import ContractCodeForm from "../../Components/ContractCode/ContractCodeForm";
const ContractCode = () => {
    return (
        <div className={'flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row'}>
            <div className={'rtl_dir md:ltr_dir'}><img src={Img} className={'w-72 mt-5 mx-4'}/></div>
           <ContractCodeForm/>
        </div>
    );
};

export default ContractCode;
