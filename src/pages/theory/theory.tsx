import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {fs} from '../../firebase';
import theory_robot from '../../img/theory - robot.png';
import { Image, Tooltip, Card, Modal, Button} from 'antd';

import './theory.css';

import Header from "../../components/header";
 
import { 
  ApiOutlined,
  TableOutlined,
  CalculatorOutlined,
  LaptopOutlined,
  LockOutlined,
  KeyOutlined,
  EditOutlined
} from '@ant-design/icons';

const Theory = () => {
  const User = JSON.parse(localStorage.getItem("userData") || "{}");
  const id = JSON.parse(localStorage.getItem("data") || "{}").email;
  const history = useHistory();
  const [Visible, setVisible] = useState(false);
  const [Title, setTitle] = useState("");
  const [Progress, setProgress] = useState(4);
  const text_message_robot: string = "Aprende de la teoria para entender y mejorar en la practica!";

  const handleCancel = () => {
    setVisible(!Visible);
  };

  useEffect(() => {
    if(User.teacher === false){
      //refresca los datos del
      const getData = async () => {
        const doc = await fs.collection("userData").doc(id).get();
        console.log(doc.data());
        var progress = JSON.parse(localStorage.getItem("userData") || "{}");
        setProgress(progress.Progress);
      }
      getData();
    } 
  }, []);

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
        <div>
            <div className="card-body-theory">
              <Card 
                onClick={()=>{
                  setVisible(!Visible);
                  setTitle("Circuitos lógicos");
                  localStorage.setItem("next", JSON.stringify("Circuitos logicos"));
                }}
                bordered={false} 
                className="card-body-theoryStyle card-circuitos"
                bodyStyle={{textAlign: "center"}}
              >
                <h2 className="text-botton">Circuitos lógicos</h2>
                <LaptopOutlined className="icon-botton-theory"/>
              </Card> 
              <Card 
                onClick={()=>{
                  if(Progress >= 1){
                    setVisible(!Visible);
                    localStorage.setItem("next", JSON.stringify("Sistema binarios"));
                    setTitle("Sistema binarios");
                  }
                }}
                bordered={false} 
                className="card-body-theoryStyle card-binario"
                bodyStyle={{textAlign: "center"}}
              > 
              <h2 className="text-botton">Sistema binarios</h2>
              { Progress >= 1 ? 
                <h2 className="text-botton">0101</h2>
              :      
                <LockOutlined className="icon-botton-theory"/>
              }
              </Card>
            </div>

            <div className="card-body-theory">
              <Card 
                onClick={()=>{
                  if(Progress >= 2){
                    setVisible(!Visible);
                    setTitle("Algebra booleana");
                    localStorage.setItem("next", JSON.stringify("Algebra booleana"));
                  }
                }}
                bordered={false} 
                className="card-body-theoryStyle card-algebra"
                bodyStyle={{textAlign: "center"}}
              >
                <h2 className="text-botton">Algebra booleana</h2>
                { Progress >= 2 ? 
                  <CalculatorOutlined className="icon-botton-theory"/>
                :      
                  <LockOutlined className="icon-botton-theory"/>
                }
              </Card> 
              <Card 
                onClick={()=>{
                  if(Progress >= 3){
                    setVisible(!Visible);
                    setTitle("Tablas de verdad");
                    localStorage.setItem("next", JSON.stringify("Tablas de verdad"));
                  }
                }}
                bordered={false} 
                className="card-body-theoryStyle card-tablas"
                bodyStyle={{textAlign: "center"}}
              >
                <h2 className="text-botton">Tablas de verdad</h2>
                { Progress >= 3 ? 
                  <TableOutlined className="icon-botton-theory"/>
                :      
                  <LockOutlined className="icon-botton-theory"/>
                }
              </Card>
            </div>
            <Card 
                onClick={()=>{
                  if(Progress >= 4){
                    setVisible(!Visible);
                    setTitle("Compuertas lógicas");
                    localStorage.setItem("next", JSON.stringify("Compuertas logicas"));
                  }
                }}
                bordered={false} 
                className="card-body-theoryStyle card-Compuertas"
                bodyStyle={{textAlign: "center"}}
              >
                <h2 className="text-botton">Compuertas lógicas</h2>
                { Progress >= 4 ? 
                  <ApiOutlined className="icon-botton-theory"/>
                :      
                  <LockOutlined className="icon-botton-theory"/>
                }
              </Card>
        </div>

        <Card  bordered={false}>
          <Tooltip placement="leftTop" color="#1890ff" title={text_message_robot} visible={!Visible}>
            <Image
              width={300}
              preview={false}
              src={theory_robot}
            />
          </Tooltip>
        </Card>
      </div>

      <Modal title={Title} visible={Visible}
        onCancel={handleCancel}
        footer={null}
      >
        <div style={{textAlign:"center"}}>
          <div style={{margin: 10}}>
          <Button 
            type="primary" 
            htmlType="submit" 
            onClick={() => history.push('/theory/definition')}
            style={{backgroundColor:"#f5222d", borderColor:"#96030b"}}
          >
            Apuntes <EditOutlined style={{marginLeft:5}}/>
          </Button>
          </div>
          <Button 
            type="primary" 
            htmlType="submit" 
            onClick={() => history.push('/theory/exercise')}
            style={{backgroundColor:"#ff9400", borderColor:"#af6600"}}
          >
            Examen <KeyOutlined style={{marginLeft:5}}/>
          </Button> 
        </div>
      </Modal>

    </>
  );
}

export default Theory;