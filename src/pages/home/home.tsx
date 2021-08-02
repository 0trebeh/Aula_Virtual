import React, { useState, useEffect } from 'react'; 
import {fs} from '../../firebase';

import home_robot from '../../img/home-robot.png';

import {  Image, Tooltip, Card, Form, Input, Button, Switch, Modal } from 'antd';
import { 
  UserOutlined, 
  SolutionOutlined
} from '@ant-design/icons';

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./home.css";

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

  const text_message_robot = "Selecciona una opcion del menu!";
  const text_message_robot_seccion = "Busca una seccion para iniciar las clases!";

  return (
    <>
      <>
        <Header 
          text_Subtitle={"Home"}
          active_iconPerfil={true} 
          active_iconHome={true}
        />

        <div className="home-content">
          <h1 style={{color: "#777"}}>
            title
          </h1>
          <div className="home-body">
            <div>
              <div className="card-body-home">
                <Card 
                  bordered={false} 
                  className="card-body-homeStyle card-theory"
                  bodyStyle={{justifyContent: "space-between", display: "flex", alignItems: "center", paddingRight: 5,}}
                >
                  <h2 className="text-botton">Teoria</h2>
                  <SolutionOutlined className="icon-botton-home"/>
                </Card>
                <Card 
                  bordered={false} 
                  className="card-body-homeStyle card-laboratory" 
                  bodyStyle={{justifyContent: "space-between", display: "flex", alignItems: "center", paddingRight: 5,}}
                >
                  <h2 className="text-botton">Laboratorio</h2>
                  <SolutionOutlined className="icon-botton-home"/>
                </Card>
              </div>
              { RegisterComplete /* RegisterComplete || InSeccion */ ?
              <div className="card-body-home">
                <Card 
                  bordered={false} 
                  className="card-body-homeStyle card-task"
                  bodyStyle={{justifyContent: "space-between", display: "flex", alignItems: "center", paddingRight: 5,}}
                >
                  <h2 className="text-botton">Tarea</h2>
                  <SolutionOutlined className="icon-botton-home"/>
                </Card>
                <Card 
                  bordered={false} 
                  className="card-body-homeStyle card-stats" 
                  bodyStyle={{justifyContent: "space-between", display: "flex", alignItems: "center", paddingRight: 5,}}
                >
                  <h2 className="text-botton">Estadisticas</h2>
                  <SolutionOutlined className="icon-botton-home"/>
                </Card>
              </div>
              :
              <div className="card-body-home">
                <Card 
                  bordered={false} 
                  className="card-body-search card-Search"
                  bodyStyle={{justifyContent: "space-between", display: "flex", alignItems: "center", paddingRight: 5,}}
                >
                  <h2 className="text-botton">Buscar Seccion</h2>
                  <SolutionOutlined className="icon-botton-home"/>
                </Card>
              </div>
              }
            </div>
            <div className="robot-home">
              <Tooltip placement="leftTop" color="#1890ff" 
                title={ RegisterComplete ? text_message_robot : text_message_robot_seccion} 
                visible={!RegisterVisible}
              >
                <Image
                  width={300}
                  preview={false}
                  src={home_robot}
                />
              </Tooltip>
            </div>
          </div>
        </div>
      <Footer/>

      </>

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