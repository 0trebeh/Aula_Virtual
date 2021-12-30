import React, { useState, useEffect } from 'react';
import {fs} from '../../firebase';

import Header from "../../components/header";

import profile_robot from '../../img/profile-face.png';
import list_robot from '../../img/chat_robot.png';

import { List, Avatar, Image, Tooltip, Form, Modal, Button, message, InputNumber} from 'antd';

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

const ListUsers = () => {

  const User = JSON.parse(localStorage.getItem("userData") || "{}");
  const id = JSON.parse(localStorage.getItem("data") || "{}").email;
  const [Loading, setLoading] = useState(true);
  const [Visible, setVisible] = useState(false);
  const [Title, setTitle] = useState("");
  const [Section, setSection] = useState(User.section);
  const [Teacher, setTeacher] = useState(User.teacher);
  const [data, setdata] = useState([{
    id: ".@.com",
    lastname: "...",
    m: ".",
    name: "...",
    section: "..",
    teacher: false,
    y: "....",
    Grades: ".."
  }]);

  useEffect(() => {
    const getData = async () => {

      var doc = await fs.collection(Section).doc(Section).get();
      var temp = doc.data() || [];
      setdata(temp.list); 

    }
    getData();

    setLoading(false);
  }, []);

  const viewModal = (e: any) => {
    console.log(e);
    setTitle(e);
    setVisible(!Visible);
  }

  const onCancel = () => {
    setVisible(!Visible);
  }

  const assignGrades = async (values: any) => {
    var {Grades} = values;
    
    for (let i = 0; i < data.length; i++) {
      
      if(data[i].id == Title){
        data[i].Grades = Grades;
 
        var up = fs.collection(Section).doc(Section);
        var setUp = up.set({
          list: data
        }, { merge: true });

        message.success("Has asignado satisfactoriamente la calificacion"+User.section);
        break
      }else {

      }
      
    }
  }
    
    return (
      <div style={{backgroundColor: "#1B4F72",}}> 
      <Header 
        text_Subtitle={"Lista de Estudiantes"}
        active_iconPerfil={true} 
        active_iconHome={true}
      />

      <h1 style={{color: "white", marginLeft: 30, paddingTop: 10}}>Lista de Estudiantes</h1>

      <div style={{display: "flex", justifyContent: "space-between"}}>
      <div style={{
        height: "calc(100vh - 128px)",
        width: "60%",
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          size="large"
          loading={Loading}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={profile_robot} />}
                title={
                  <div style={{display: "flex",}}>
                  <div style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                    <h3 style={{color:"#CCD1D1"}}>{item.name} {item.lastname} </h3>
                    <h2 style={{color:"#ffff"}}>
                      {item.id == id ?
                        " (" + item.Grades + " Pts)"
                      :
                        null
                      }
                    </h2> 
                    <p style={{color:"#909494"}}>{item.m} / {item.y}</p>
                  </div>
                  {Teacher == false ?
                    null
                    :
                    <button 
                      type="button" 
                      onClick={() => viewModal(item.id)}
                      style={{marginLeft: 30}}
                    >
                      Asignar calificaiones
                    </button>
                  }
                  </div>
                }
                description={<p style={{color:"#F2F3F4"}}>{item.id}</p>}
              />
            </List.Item>
          )}
        />
      </div>
      <div className="robot-home">
        <Tooltip placement="leftTop" color="#1890ff" 
          title={"Estudiantes la seccion \""+Section+"\""} 
          style={{width: 50}}
        >
          <Image
            width={300}
            preview={false}
            src={list_robot}
          />
        </Tooltip>
      </div>
      </div>

      <Modal 
        title={Title} 
        visible={Visible}
        footer={null}
        onCancel={onCancel}
      >
        <Form {...layout} name="nest-search" onFinish={assignGrades}>
          <Form.Item name={'Grades'} label="Calificación" 
            rules={[{ required: true, message: 'Por favor, ingrese la calificación del estudiante!' }]}
          >
            <InputNumber size="large" placeholder="pts" />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
            <Button type="primary" htmlType="submit">
              Asignar
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
    );
}

export default ListUsers;