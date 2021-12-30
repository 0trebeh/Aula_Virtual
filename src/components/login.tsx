import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {auth, fire} from '../firebase';

import {  message, Form, Input, Button, Modal } from 'antd';
import { 
  MailOutlined,
  UnlockOutlined,
  GoogleOutlined
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
      //console.log(values);
      auth.signInWithEmailAndPassword(values.email, values.password)
      .then(userCredential => {
        console.log(userCredential);
        setLoginVisible(!LoginVisible);
        localStorage.setItem("data", JSON.stringify(
            {email: values.email}
          )
        );
        history.push('/home');
      }).catch(error => {
        if(error.code === "auth/user-not-found"){
          message.warning('Usuario no encontrado, asegúrese de escribir bien el correo');
        }
        if(error.code === "auth/wrong-password"){
          message.error('Contraseña incorrecta');
        }
        if(error.code === "auth/too-many-requests"){
          message.warning('Demasiados intentos fallidos, intentar mas tarde');
        }
        if(error.code === "auth/network-request-failed"){
          message.error('tiempo de espera superado, conexión interrumpida o host inaccesible');
        }
        console.error( 'Error: ', error );
      });   
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
        <Button type="primary" htmlType="submit" onClick={() => google()}>
          <GoogleOutlined /> Entrar con google
        </Button>
      </Modal>
    ); 
}

export default Login;