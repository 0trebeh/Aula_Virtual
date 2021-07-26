import React from 'react';
import {useHistory} from 'react-router-dom';
import {auth} from '../../firebase';

import profile_robot from '../../img/profile-face.png';

import { Card, Image, Button } from 'antd';
import { 
  ClockCircleOutlined, 
  ThunderboltOutlined, 
  FormOutlined 
} from '@ant-design/icons';

import Header from "../../components/header";
//import Footer from "../../components/footer";

const Profile = () => {
  const history = useHistory();

  const User = JSON.parse(localStorage.getItem("userData") || "{}");

  const signOut = () => {
    auth.signOut()
    .then(() => {
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
                  <h2>{User.name} {User.lastname}</h2>
                  <div style={{display: "flex", justifyContent: "flex-start",}}>
                    <ClockCircleOutlined style={{marginRight: 7, color: "blueviolet"}}/>
                    <h4>Se registro en julio de 2016</h4>
                  </div>
                  <div style={{display: "flex", justifyContent: "flex-start",}}>
                    <ThunderboltOutlined style={{marginRight: 7, color: "orange"}}/>
                    <h4>0 de Experiencia</h4>
                  </div>
                </div>
              </div>
              <Button type="primary"> Editar Perfil <FormOutlined /></Button>
            </div>
          </Card>
          <Card bodyStyle={{width:"60%", marginLeft:20}}>
            hola mundo
            <Button type="dashed" onClick={signOut}> Cerrar Sesion</Button>
          </Card>
        </>
    );
}

export default Profile;