import React, { useState, useEffect } from 'react';
import {fs} from '../../firebase';

import chat_robot from '../../img/chat_robot.png';
import profile_robot from '../../img/profile-face.png';

import { List, Avatar, Affix, Image, Tooltip, Input, Button } from 'antd';

import Header from "../../components/header";

const Chat = () => {   

  const [Message, setMessage] = useState("");
  const [Loading, setLoading] = useState(true);
  const [Get, setGet] = useState(true);
  var section = JSON.parse(localStorage.getItem("userData") || "{'section': 'Prueba'}").section;  
  const User = JSON.parse(localStorage.getItem("userData") || "{'name': 'default'}");
  const [data, setdata] = useState([{title: '...', description: "... ...", date: "../../../", time: ".."},]);

  useEffect(() => {
    const getData = async () => {

      const doc = await fs.collection(section).get().then(snapshot => {
        
        var temp = [{title: '...', description: "... ...", date: "../../../", time: ".."},];
        temp.pop();
        snapshot.forEach(doc => {
      
          console.log(doc.data());   
          var {title, description, date, time} = doc.data();

          temp.push({
            title, 
            description, 
            date, 
            time
          });
        });
        temp.pop();
        setdata(temp); 
      });

    }
    getData();

    setLoading(false);
  }, [Get]);

  const onFinish = async () => {
    if(Message === ""){
      //nada
    } else {
      var nowId = Date.now();
      var now = new Date(nowId);
      var date = now.getDate() + '/' + ( now.getMonth() + 1 ) + '/' + now.getFullYear();
      var time = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

      var message = {title: User.name, description: Message, time, date };
      data.push(message);

      const doc = await fs.collection(section).doc(nowId.toString()).set(message);
    }
    setMessage("");
    setGet(!Get);
  };

  const onChangeMessage = async (e: any) => {
    await setMessage(e);
  }

  //subir files
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
        <div style={{width:"60%", backgroundColor: "#1B4F72",}}>
          <div style={{
            height: "calc(100vh - 104px)",
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
                      <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h3 style={{color:"#CCD1D1"}}>{item.title}</h3>
                        <p style={{color:"#909494"}}>{item.time} - {item.date}</p>
                      </div>
                    }
                    description={<p style={{color:"#F2F3F4"}}>{item.description}</p>}
                  />
                </List.Item>
              )}
            />
          </div>

          <div style={{width:"100%", backgroundColor:"#1D4368", paddingTop:5, paddingBottom:5 }}>
            <div style={{ marginLeft: 10, display:"flex", width:"95%",}}>
              <Input 
                  placeholder="Escribe tu mensaje" 
                  value={Message}
                  onChange={(e)=> onChangeMessage(e.target.value)}
              />
              <Button type="primary" htmlType="submit" onClick={() => onFinish()}>
                Enviar
              </Button>
            </div>
            
          </div>
          
          {/*<Form
            name="form"
            onFinish={onFinish}
            style={{width:"100%", backgroundColor:"#1D4368", paddingTop:5 }}
          >          
            {/*<Form.Item
              style={{marginLeft: 10, minWidth:"5%",}}
              name="upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button type="dashed"><UploadOutlined /></Button>
              </Upload>
            </Form.Item>}
          </Form>*/}


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
    </div>
  );
}

export default Chat;