import React from 'react';
import {Button, Form, Input} from "antd";
import {InfoCircleOutlined, InfoCircleTwoTone} from "@ant-design/icons";
import useContractCode from "./Hooks/useContractCode";
const ContractCodeForm = () => {
    const {onFinishHandler,form,postLoading}=useContractCode();
    return (
        <Form form={form} onFinish={onFinishHandler} className={'px-2 flex-1 rtl_dir'}>
            <Form.Item className={'font-bold mt-24'} label={<p className={'text-slate-500'}> <InfoCircleOutlined spin={true}/> مشتری محترم تیپاکس، لطفا جهت ثبت موقعیت و تعیین نوع تحویل مرسوله خود، کد رهگیری را وارد فرماید</p>}/>
            <div className={'grid grid-rows-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'}>
                <Form.Item className={'font-bold'} name='contractcode_input' rules={[{required:true,message:'لطفا کد رهگیری را وارد کنید'}]}>
                    <Input placeholder={'کد رهگیری ...'} className={'mt-2 w-full h-16 shadow-md border-none'} />
                </Form.Item>
                <Form.Item className={'mx-2 py-0 md:py-2 lg:py-2 xl:py-2 2xl:py-2'}>
                    <Button loading={postLoading} htmlType='submit' className={'rounded-xl bg-primary shadow-md font-bold h-16 w-64 text-white text-xs hover:bg-green-700 button_antd'}>جستجو</Button>
                </Form.Item>
            </div>
        </Form>
    );
};

export default ContractCodeForm;
