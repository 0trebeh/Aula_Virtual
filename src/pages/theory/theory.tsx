import React from 'react';
import theory_robot from '../../img/theory - robot.png';
import { Image, Tooltip, Card} from 'antd';

import Header from "../../components/header";

const Theory = () => {
  const text_message_robot: string = "Aprende de la teoria para entender y mejorar en la practica!";

  return (
    <>
      <Header 
        text_Subtitle={"Aula Virtual Web"}
        active_iconPerfil={true} 
        active_iconHome={true}
      />

      <div style={
        {
          display: "flex", 
          justifyContent: 'space-around', 
          alignItems: "center", 
          height:"calc(100vh - 60px)",
        }
      }>
        <Card  bordered={false}>
          <div style={
            {
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center", 
            }
          }>
            <Card  bordered={false}>
              hola
            </Card>
            <Card  bordered={false}>
              hola
            </Card>
          </div>
          <div style={
            {
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center", 
            }
          }>
            <Card  bordered={false}>
              hola
            </Card>
            <Card  bordered={false}>
              hola
            </Card>
          </div>
        </Card>
        

        <Card  bordered={false}>
          <Tooltip placement="leftTop" color="#1890ff" title={text_message_robot} visible={true}>
            <Image
              width={300}
              preview={false}
              src={theory_robot}
            />
          </Tooltip>
        </Card>
      </div>

    </>
  );
}

export default Theory;