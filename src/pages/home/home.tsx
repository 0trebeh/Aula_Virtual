import React from 'react';

import landingPage_robot from '../../img/landingpage - robot.png';

import { Image, Tooltip, Card } from 'antd';
import { ExportOutlined, SolutionOutlined } from '@ant-design/icons';

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./home.css"

function Home() { 

  const text_Title: string = "\"Atento a lo que el robot tiene que decir\"";
  const text_message_robot: string = "Hola!, acompañame a conocer el mundo de los circuitos logicos. La magia que mueve a la tecnologia.";

  return (
    <>
      <Header text_Subtitle={"Aula Virtual Web"}/>
        <div style={{height: "calc(100vh - 104px)", padding: 40, paddingTop: 20, textAlign: "center", minWidth: 610}}>
          <h1 style={{color: "#777"}}>
            {text_Title} 
          </h1>
          <div style={{ marginTop: 40, display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <div style={{ width: 542, display: "flex", alignItems: "start" }}>
              <Tooltip placement="rightTop" color="#1890ff" title={text_message_robot} visible={true}>
                <Image
                  width={300}
                  preview={false}
                  src={landingPage_robot}
                />
              </Tooltip>
            </div>
            <div>
              <Card bordered={false} bodyStyle={{width: 260, background: "#f5222d", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: 2, marginTop: 10}}>
                <h2 style={{color: "white", margin: 0}}>Iniciar Sesion</h2>
                <ExportOutlined style={{ fontSize: '35px', color: '#fff' }}/>
              </Card>
              <Card bordered={false} bodyStyle={{width: 260, background: "#ff9400", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: 2, marginTop: 10}}>
                <h2 style={{color: "white", margin: 0}}>Registrarse</h2>
                <SolutionOutlined style={{ fontSize: '35px', color: '#fff' }}/>
              </Card>
            </div>
          </div>
        </div>
      <Footer/>
    </>
  );
}
  
export default Home;