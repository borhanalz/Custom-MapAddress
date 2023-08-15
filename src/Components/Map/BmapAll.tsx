import React, { FC } from "react";
import useBmap from "./hooks/useBmap";
import { Button, Form, Input, Space } from "antd";
import Bmap from "./Bmap";
import TextArea from "antd/es/input/TextArea";
import { useAppSelector } from "../../Core/Store/store";
import useBmapQuery from "./hooks/useBmapQuery";

const BmapAll: FC = () => {
  const { HandelGetAddress,onFinishHandler,form} = useBmap();
  const addressInfo:any= useAppSelector(state=>state.MapReducer.address);  
  return (
    <div className="rtl_dir">
      <Form form={form} onFinish={onFinishHandler} className="p-2">
        <Bmap />
        <Space direction="vertical" className="mt-52 w-full">
          <Space direction="vertical" className="w-full">
            <Form.Item>
              <Input readOnly className="w-full h-11" value={addressInfo}/>
            </Form.Item>
            <div className="w-full">
              <Form.Item name={'address_details'} rules={[{required:true,message:'جزئیات ادرس را وارد کنید'}]}>
                <TextArea
                  className="w-full placeholder:font-bold float-left"
                  placeholder="جزئیات ادرس : "
                ></TextArea>
              </Form.Item>
              <Form.Item>
                <Button
                  onClick={HandelGetAddress}
                  className="bg-primary text-white font-bold w-44 h-12 button_antd mt-3"
                >
                  تبدیل موقعیت به ادرس
                </Button>
              </Form.Item>
            </div>
          </Space>
          <div className="text-center">
            <Button
              htmlType="submit"
              className="bg-primary text-white font-bold w-44 h-12 button_antd"
            >
              ثبت اطلاعات
            </Button>
          </div>
        </Space>
      </Form>
    </div>
  );
};
export default BmapAll;
