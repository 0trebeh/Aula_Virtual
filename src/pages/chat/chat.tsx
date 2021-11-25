import React, { useState, useEffect } from 'react';
import {fs} from '../../firebase';

import chat_robot from '../../img/chat_robot.png';
import profile_robot from '../../img/profile-face.png';

import { List, Avatar, Affix, Image, Tooltip, Form, Input, Button, Upload } from 'antd';
import {UploadOutlined} from '@ant-design/icons';

import Header from "../../components/header";
import Footer from "../../components/footer";

const Chat = () => {   

  // [Message, setMessage] = useState([]);
  const [Loading, setLoading] = useState(true);
  /*var section = JSON.parse(localStorage.getItem("userData") || "{section: 'Prueba'}").section;  
  const User = JSON.parse(localStorage.getItem("userData") || "{name: 'default'}");*/

  var data = [
    {
      title: '...',
      description: "... ...",
    },
  ];

  useEffect(() => {
    const getData = async () => {
      /*var docRef = db.collection("cities").doc("SF");

      docRef.get().then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data());
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      }); 
      const doc = await fs.collection(section).get().then(snapshot => {


        snapshot.forEach(doc => {
      
          console.log( doc.data());    
      
        });
      
      });*/

    }
    getData();

    setLoading(false);
  }, []);

  const onFinish = async (values: any) => {
    /*var message = {title: User.name, description: values.message};
    data.push(message);
    console.log(message);
    const doc = await fs.collection(section).doc(Date.now().toString()).set(message);*/
  };

  /*const normFile = (e: any) => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };*/

  const text_message_robot = "Comunicate con tu clase y comparte contenido multimedia";

  return (
    <div>
      <Header 
        text_Subtitle={"Mensajes"}
        active_iconPerfil={true} 
        active_iconHome={true}
      />
      <div style={{display:"flex", justifyContent:"space-between",}}>
        <div style={{width:"60%", backgroundColor: "#1B4F72", minHeight: "calc(100vh - 104px)",}}>
          <div style={{width:"100%", minHeight: "calc(100% - 49px)"}}>
            <List
              itemLayout="horizontal"
              dataSource={data}
              size="large"
              loading={Loading}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={profile_robot} />}
                    title={<h3 style={{color:"#CCD1D1"}}>{item.title}</h3>}
                    description={<p style={{color:"#F2F3F4"}}>{item.description}</p>}
                  />
                </List.Item>
              )}
            />
          </div>
          
          <Form
            name="form"
            onFinish={onFinish}
            style={{width:"100%", backgroundColor:"#1D4368", paddingTop:5 }}
          >
            <div style={{ marginLeft: 10, display:"flex", width:"100%",}}>
              <Form.Item name="message" style={{minWidth:"80%", height: 20}}>
                <Input placeholder="Escribe tu mensaje"/>
              </Form.Item>

              <Form.Item
                style={{marginLeft: 10, padding: 0, minWidth:"15%", height: 20}}
              >
                <Button type="primary" htmlType="submit">
                  Enviar
                </Button>
              </Form.Item>
            </div>
            
            {/*<Form.Item
              style={{marginLeft: 10, minWidth:"5%",}}
              name="upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button type="dashed"><UploadOutlined /></Button>
              </Upload>
            </Form.Item>*/}
          </Form>
        </div>
        <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
          <div className="robot-home">
            <Tooltip placement="leftTop" color="#1890ff" 
              title={text_message_robot} 
            >
              <Image
                width={300}
                preview={false}
                src={chat_robot}
              />
            </Tooltip>
          </div>
        </Affix>
      </div>
      <Footer/>
    </div>
  );
}

export default Chat;