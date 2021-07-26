import React, { useState, useEffect } from 'react';
import {auth, fs} from '../../firebase';

import {  Form, Input, Button, Switch, Modal } from 'antd';
import { 
  UserOutlined, 
} from '@ant-design/icons';

import Header from "../../components/header";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

const Home = () => {

  const [RegisterComplete, setRegisterComplete] = useState(true);
  const [RegisterVisible, setRegisterVisible] = useState(true);
  const [Teacher, setTeacher] = useState(false);
  const id = JSON.parse(localStorage.getItem("data") || "{}").email;

  useEffect(() => {
    //obtiene los datos del usuario
    const getData = async () => {
      const doc = await fs.collection("userData").doc(id).get();
      console.log(doc.data());
      if(doc.data() === undefined){
        setRegisterComplete(false);
      } else {
        localStorage.setItem("userData", JSON.stringify(doc.data()));
      }
    }
    getData();
  }, []);

  const teacher = () => {
    setTeacher(!Teacher);
  }
    
  const handleCancel = () => {
    setRegisterVisible(!RegisterVisible);
  };

  const onFinish = async (values: any) => {
    var data = {};
    var { name, lastname, teacher} = values;
    if(teacher === undefined){
      data = {name, lastname, teacher: false};
    } else {
      data = values;
    }
    console.log(data);
    const doc = await fs.collection("userData").doc(id).set(data);
    console.log(doc);
  }; 

  return (
    <>
      <div>
        <Header 
          text_Subtitle={"Perfil"}
          active_iconPerfil={true} 
          active_iconHome={true}
        />

      </div>

    { !RegisterComplete ?
      <Modal title="Completar registro" visible={RegisterVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form {...layout} name="nest-messages" onFinish={onFinish}>
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


          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <p style={{marginLeft: 7, marginRight: 20}}>Registrarme como maestro: </p>
            <Form.Item name="teacher" valuePropName="checked" >
              <Switch onClick={teacher}/>
            </Form.Item>
          </div>
          { Teacher ?
            <h4>Seras profesor</h4>
            :
            null
          }
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
            <Button type="primary" htmlType="submit">
              Registrarme
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      :
      null
    }
    </>
  );
}

export default Home;