import React, { useState } from 'react';

import landingPage_robot from '../../img/landingpage - robot.png';

import { Image, Tooltip, Card } from 'antd';
import { 
  ExportOutlined, 
  SolutionOutlined, 
} from '@ant-design/icons';

import Header from "../../components/header";
import Footer from "../../components/footer";
import Login from "../../components/login";
import Register from "../../components/register";

import "./landingPage.css"

function LandingPage() { 
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const [textRobotVisible, setTextRobotVisible] = useState(true);

  const showModal = (flag: string) => {
    if (flag === "login") {
      setIsLoginVisible(!isLoginVisible);
    } else {
      setIsRegisterVisible(!isRegisterVisible);
    }
    setTextRobotVisible(false);
  };

  const text_Title: string = "\"Atento a lo que el robot tiene que decir\"";
  const text_message_robot: string = "Hola!, acompañame a conocer el mundo de los circuitos logicos. La magia que mueve a la tecnologia.";

  return (
    <>
      <Header text_Subtitle={"Aula Virtual Web"}/>
        <div className="home-content">
          <h1 style={{color: "#777"}}>
            {text_Title} 
          </h1>
          <div className="home-body">
            <div className="robot-home">
              <Tooltip placement="rightTop" color="#1890ff" title={text_message_robot} visible={textRobotVisible}>
                <Image
                  width={300}
                  preview={false}
                  src={landingPage_robot}
                />
              </Tooltip>
            </div>
            <div className="card-body">
              <Card 
                onClick={() => showModal("login")}
                bordered={false} 
                className="card-bodyStyle card-login"
                bodyStyle={{justifyContent: "space-between", display: "flex", alignItems: "center", paddingRight: 5,}}
              >
                <h2 className="text-botton">Iniciar Sesion</h2>
                <ExportOutlined className="icon-botton"/>
              </Card>
              <Card 
                onClick={() => showModal("register")}
                bordered={false} 
                className="card-bodyStyle card-register" 
                bodyStyle={{justifyContent: "space-between", display: "flex", alignItems: "center", paddingRight: 5,}}
              >
                <h2 className="text-botton">Registrarse</h2>
                <SolutionOutlined className="icon-botton"/>
              </Card>
            </div>
          </div>
        </div>
      <Footer/>
      <Login visible={isLoginVisible} />
      <Register visible={isRegisterVisible} />
    </>
  );
}
  
export default LandingPage;