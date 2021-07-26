import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {auth, fire} from '../firebase';

import { message, Form, Input, Button, Modal } from 'antd';
import {
  UnlockOutlined,
  MailOutlined,
  GoogleOutlined
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

  const onFinish = (values: any) => {
    auth.createUserWithEmailAndPassword(values.email, values.password)
    .then(userCredential => {
      console.log(userCredential);
      localStorage.setItem("data", JSON.stringify({email: values.email}));
      setRegisterVisible(!RegisterVisible);
      history.push('/home');
    }).catch(error => {
      
      if(error.code === "auth/email-already-in-use"){
        message.error('El correo ya esta en uso en otra cuenta');
      }
      console.log(error);
    });
  }; 

  const handleCancel = () => {
    setRegisterVisible(!RegisterVisible);
  };

  const google = () => {
    const provider = new fire.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result) => {
      console.log(result);
      var a: any = result.additionalUserInfo;

      var {email} = a.profile;
      localStorage.setItem("data", JSON.stringify({email}));

      console.log("google sign in");
      history.push('/home');
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <Modal title="Registrarse" visible={props.visible === RegisterVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <Form {...layout} name="nest-messages" onFinish={onFinish} >
        <Form.Item name={'email'} label="Correo" 
          rules={[{ type: 'email', required: true, message: 'Por favor, ingresa tu correo!' }]}
        >
          <Input size="large" placeholder="Correo electronico" prefix={<MailOutlined />} />
        </Form.Item>
        <Form.Item name={'password'} label="Contraseña" 
          rules={[{ 
            required: true, 
            message: 'Por favor, ingresa tu contraseña! (minimo seis caracteres)',
            min: 6 
          }]}
        >
          <Input.Password size="large" placeholder="Contraseña" prefix={<UnlockOutlined />} />
        </Form.Item>
        <Form.Item name={'ConfirmPassword'} label="Confirmar c" 
          rules={[{ required: true, message: 'Por favor, confirme su contraseña!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('¡Las dos contraseñas que ingresó no coinciden!'));
            },
          }),
        ]}
        >
          <Input.Password size="large" placeholder="Confirmar contraseña" prefix={<UnlockOutlined />} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
          <Button type="primary" htmlType="submit">
            Registrarme
          </Button>
        </Form.Item>
      </Form>
      <Button type="primary" htmlType="submit" onClick={() => google()}>
        <GoogleOutlined /> Registrarme con google
      </Button>
    </Modal>
  );
}

export default Register;