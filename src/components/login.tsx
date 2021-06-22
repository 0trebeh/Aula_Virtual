import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

import {  Form, Input, Button, Modal } from 'antd';
import { 
  MailOutlined,
  UnlockOutlined 
} from '@ant-design/icons';

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};

type Props =  {
  visible: boolean;
};

const Login = (props: Props) => {

    const history = useHistory();
    const [LoginVisible, setLoginVisible] = useState(true);

    const onFinish = (values: any) => {
      console.log(values);
      setLoginVisible(!LoginVisible);
      history.push('/home');
    };

    const handleCancel = () => {
      setLoginVisible(!LoginVisible);
    };
    
    return (
      <Modal title="Iniciar Sesion" visible={props.visible === LoginVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form {...layout} name="nest-messages" onFinish={onFinish}>
          <Form.Item name={'email'} label="Correo" 
            rules={[{ type: 'email', required: true, message: 'Por favor, ingresa tu correo!' }]}
          >
            <Input size="large" placeholder="Correo electronico" prefix={<MailOutlined />} />
          </Form.Item>
          <Form.Item name={'password'} label="Contraseña" 
            rules={[{ required: true, message: 'Por favor, ingresa tu contraseña!' }]}
          >
            <Input.Password size="large" placeholder="Contraseña" prefix={<UnlockOutlined />} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
            <Button type="primary" htmlType="submit" >
              Iniciar
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
}

export default Login;