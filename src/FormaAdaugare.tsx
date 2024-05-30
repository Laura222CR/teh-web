import React, { useEffect } from 'react';

import {
    Button,
    Form,
    Input,
    InputNumber,
    Modal,

  } from 'antd';
import Telefon from './Telefon';

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };
  


interface ModalFormProps {
  visible: boolean;
  onSubmit: (data: Telefon) => void;
  onCancel:() => void;
  card : Telefon;
}

const FormaAdaugare: React.FC<ModalFormProps> = ({ visible, onCancel ,onSubmit, card }) => {
  const [form] = Form.useForm();

 

  const onFinish = (values: any) => {
    const Telefon = {
      nume : values.nume,
      model : values.model,
      imagine : values.imagine,
      pret : values.pret,
      descriere : values.descriere    }
    console.log("OnFinishMethod values")
    console.log(values);
    alert("Of course you want to add the product with the name: "+values.nume+" ?");
    onSubmit(Telefon); 
    form.resetFields();
  };
  
  
  useEffect(() =>{
    form.resetFields();
  },[onCancel])



  return (
    <Modal title="Adaugare telefon" open={visible} onCancel={onCancel} footer={null}>
        <Form form={form} {...formItemLayout} onFinish={onFinish} initialValues={{}}>
 

          <Form.Item label="Nume" name="nume" rules={[{ required: true, message: 'Introduceti numele telefonului!' }]}>
           <Input />
          </Form.Item>

          <Form.Item label="Model" name="model" rules={[{ required: true, message: 'Introduceti modelul telefonului!' }]}>
           <Input />
          </Form.Item>
          <Form.Item label="Imagine" name="imagine" rules={[{ required: true, message: 'Introduceti imaginea telefonului!' }]}>
           <Input />
          </Form.Item>



         <Form.Item label="Descriere" name="descriere" rules={[{ required: true, message: 'Introduceti descrierea telefonului!' }]}>
            <Input.TextArea />
          </Form.Item>

          <Form.Item label="Pret" name="pret" rules={[{ required: true, message: 'Introduceti pretul telefonului!' }]}>            
           <InputNumber />
           </Form.Item>


      

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
             <Button type="primary" htmlType="submit">
               Submit
             </Button>
           </Form.Item>
         </Form>
       </Modal>
  );
};

export default FormaAdaugare;