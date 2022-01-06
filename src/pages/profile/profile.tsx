import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {auth} from '../../firebase';
import {fs} from '../../firebase';

import profile_robot from '../../img/profile-face.png';
import profile from '../../img/profile.png';

import {  Image, Card, Form, Input, Button, Modal, Popconfirm, message, Tooltip} from 'antd';
import { 
  ClockCircleOutlined, 
  FormOutlined,
  UserOutlined,
  MailOutlined,
  RocketOutlined
} from '@ant-design/icons';

import Header from "../../components/header";

const Profile = () => {
  const history = useHistory();

  const User = JSON.parse(localStorage.getItem("userData") || "{}");
  const id = JSON.parse(localStorage.getItem("data") || "{}").email;
  const [Visible, setVisible] = useState(false);
  const [Name, setName] = useState(User.name);
  const [Lastname, setLastname] = useState(User.lastname);
  const [Section, setSection] = useState(User.section);
  const [Teacher, setTeacher] = useState(User.teacher);

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
  };

  const signOut = () => {
    auth.signOut()
    .then(() => {
      history.push('');
    }); 
  }

  const exitSection = async () => {
    var {name, lastname, teacher, m, y} = User;
    var data = {
      name, 
      lastname, 
      teacher, 
      section: 'false', 
      m, 
      y,
    }

    var doc = await fs.collection(Section).doc(Section).get();
    var list = doc.data() || [];
    var listUsers = list.list;
    console.log(listUsers);


    for (let i = 0; i < listUsers.length; i++) {

      if(Teacher){
        let doc = await fs.collection("userData").doc(id).set(data);
        setSection('false');
        message.success("Has salido de la seccion "+User.section);
        break
      }
      
      if(listUsers[i].id == id){

        listUsers.splice(i,1);
        console.log(listUsers);

        var up = fs.collection(Section).doc(Section);
        var setUp = up.set({
          list: listUsers
        }, { merge: true });

        let doc = await fs.collection("userData").doc(id).set(data);
        setSection('false');
        message.success("Has salido de la seccion "+User.section);
        break
      }else {

      }
      
    }
  }

  const onFinish = async (values: any) => {
    var {name, lastname} = values;
    var {teacher, section, m, y} = User;
    var data = {
      name, 
      lastname, 
      teacher, 
      section, 
      m, 
      y,
    }
    const doc = await fs.collection("userData").doc(id).set(data);
    message.success("Se han editado el perfil exitosamente.");
    setName(name);
    setLastname(lastname);
  }; 

  const onCancel = () => {
    setVisible(!Visible);
  }

  const Delete = () => {
    auth.signOut()
    .then(async () => {
      await fs.collection("userData").doc(id).delete();
      message.success("La cuenta se ha eliminado exitosamente.");
      localStorage.setItem("session", "false");
      localStorage.removeItem("data");
      localStorage.removeItem("userData");
      history.push('');
    }); 
  }
    
    return (
        <>
          <Header 
            text_Subtitle={"Perfil"}
            active_iconPerfil={false} 
            active_iconHome={true}
          />
          <Card bordered={false} bodyStyle={{width:"75%", marginTop:40, marginLeft:20}}>
            <div style={{display: "flex", justifyContent: "space-between",}}>
              <div style={{display: "flex", justifyContent: "flex-start",}}>
                <Image
                  width={120}
                  preview={false}
                  src={profile_robot}
                />
                <div style={{marginLeft: 25}}>
                  <h2>{Name} {Lastname}</h2>
                  <div style={{display: "flex", justifyContent: "flex-start",}}>
                    <ClockCircleOutlined style={{marginRight: 7, color: "blueviolet"}}/>
                    <h4>
                      Se registro el mes {User.m} de {User.y}
                    </h4>
                  </div>
                  <div style={{display: "flex", justifyContent: "flex-start",}}>
                    <MailOutlined style={{marginRight: 7, color: "red"}}/>
                    <h4>{id}</h4>
                  </div>
                  <div style={{display: "flex", justifyContent: "flex-start",}}>
                  <RocketOutlined style={{ fontSize: '20px', marginRight: 7, color: "#ff9400"}}/>
                    <h4>Nivel {User.Progress + 1}</h4>
                  </div>
                </div>
              </div>
              <Button type="primary" onClick={() => setVisible(!Visible)} > Editar Perfil <FormOutlined /></Button>
            </div>
          </Card>
          <div style={{width: "80%", display:"flex", justifyContent:"space-between",}}>
            <div>
              <Card bodyStyle={{width:"60%", marginLeft:20, paddingTop: 15}}>
                <h3>Sesion:</h3> 
                <Button style={{backgroundColor: "#ff9400", marginLeft:180}} type="primary" onClick={signOut}> Cerrar Sesion</Button>
              </Card>
              {Section === "false"
              ?
              <></>
              :
              <Card bodyStyle={{width:"60%", marginLeft:20, marginTop: 30}}>
                Seccion: "{Section}" 
                <div style={{ width: 70, marginLeft: 180 }}>
                  <Popconfirm
                    placement="rightTop"
                    title={"Seguro que desea salir de la seccion?"}
                    onConfirm={exitSection}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button style={{backgroundColor: "#f5222d"}} type="primary"> Salir de la seccion</Button>
                  </Popconfirm>
                  </div>
              </Card>
              }
              <Card bodyStyle={{width:"60%", marginLeft:20,}}>
                Cuenta: 
                <div style={{ width: 70, marginLeft:180}}>
                  <Popconfirm
                    placement="rightTop"
                    title={"Seguro que desea eliminar la cuenta?. Esto es permanente!"}
                    onConfirm={Delete}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button style={{backgroundColor: "red"}} type="primary"> Eliminar Cuenta</Button>
                  </Popconfirm>
                  </div>
              </Card>
            </div>
            <div className="robot-home">
              <Tooltip placement="leftTop" color="#1890ff" 
                title={"Tus datos estan aqui!"} 
              >
                <Image
                  width={200}
                  preview={false}
                  src={profile}
                />
              </Tooltip>
            </div>
          </div>

          <Modal title="Editar perfil" visible={Visible}
            footer={null}
            onCancel={onCancel}
          > 
            <Form {...layout} name="edit" onFinish={onFinish}>
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
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
                <Button type="primary" htmlType="submit">
                  Editar datos
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </>
    );
}

export default Profile;