import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

import {  Form, Input, Button, Switch, Modal } from 'antd';
import { 
  UserOutlined, 
  UnlockOutlined,
  MailOutlined
} from '@ant-design/icons';

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

type Props =  {
  visible: boolean;
};

const Register = (props: Props) => {

  const history = useHistory();
  const [RegisterVisible, setRegisterVisible] = useState(true);
  const [Teacher, setTeacher] = useState(false);

  const onFinish = (values: any) => {
    console.log(values);
    setRegisterVisible(!RegisterVisible);
    history.push('/home');
  };

  const handleCancel = () => {
    setRegisterVisible(!RegisterVisible);
  };

  const teacher = () => {
    setTeacher(!Teacher);
  }

  return (
    <Modal title="Registrarse" visible={props.visible === RegisterVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <Form {...layout} name="nest-messages" onFinish={onFinish} >
        <Form.Item name={'name'} label="Nombre" 
          rules={[{ required: true, message: 'Por favor, ingresa tu nombre!' }]}
        >
          <Input size="large" placeholder="Nombre" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item name={'lastname'} label="Apellido" 
          rules={[{ required: true, message: 'Por favor, ingresa tu apellido!' }]}
        >
          <Input size="large" placeholder="Apellido" prefix={<UserOutlined />} />
        </Form.Item>
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
        <Form.Item name={'ConfirmPassword'} label="Confirmar c" 
          rules={[{ required: true, message: 'Por favor, confirme su contraseña!' }]}
        >
          <Input.Password size="large" placeholder="Confirmar contraseña" prefix={<UnlockOutlined />} />
        </Form.Item>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <p style={{marginLeft: 7, marginRight: 20}}>Registrarme como maestro: </p>
          <Form.Item name="teacher" valuePropName="checked" >
            <Switch onClick={teacher} />
          </Form.Item>
        </div>
        { Teacher ?
          <h4>Seras profesor</h4>
          :
          null
        }
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default Register;