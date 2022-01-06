import React, { useState, useEffect } from 'react'; 
import {useHistory} from 'react-router-dom';
import {fs} from '../../firebase';

import home_robot from '../../img/home-robot.png';

import {  Image, Tooltip, Card, Form, Input, Button, Switch, Modal, message } from 'antd';
import { 
  UserOutlined, 
  MailOutlined,
  BookOutlined,
  SearchOutlined,
  UsergroupAddOutlined,
  ToolOutlined,
  SolutionOutlined,
  ApiOutlined,
  CalculatorOutlined
} from '@ant-design/icons';

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./home.css";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

const Home = () => {

  const history = useHistory();

  const [RegisterComplete, setRegisterComplete] = useState(true);
  const [Teacher, setTeacher] = useState(false);
  const [TooltipVisible, setTooltipVisible] = useState(true);
  const [Visible, setVisible] = useState(false);
  const [Section, setSection] = useState('false');
  const [FormSeccion, setFormSeccion] = useState(false);
  const [SearchSeccion, setSearchSeccion] = useState(false);
  const [Effect, setEffect] = useState(false);
  const User = JSON.parse(localStorage.getItem("userData") || "{}");
  const IsTeacher = User.teacher;
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
        setSection(JSON.parse(localStorage.getItem("userData") || "{}").section);
      }
    }
    getData();
    console.log(RegisterComplete)
  }, [Effect]);

  const teacher = () => {
    setTeacher(!Teacher);
  }

  const onFinish = async (values: any) => {
    var data = {};
    var { name, lastname, teacher} = values;
    var m = new Date().getMonth();
    var y = new Date().getFullYear();

    data = {
      name, 
      lastname, 
      teacher: Teacher, 
      section: 'false', 
      Progress: 0,
      m: m.toString(), 
      y: y.toString(),
    };

    console.log(data);
    const doc = await fs.collection("userData").doc(id).set(data);

    console.log(doc);

    if(doc === undefined){
      setRegisterComplete(!RegisterComplete);
      setEffect(!Effect);
    }
  }; 

  const formRegister = () => {
    setFormSeccion(!FormSeccion);
    setTooltipVisible(false);
  }

  const onCancel = () => {
    setFormSeccion(false);
    setSearchSeccion(false);
    setVisible(false);
    setTooltipVisible(true);
  }

  const createSection = async (values: any) => {
    
    if(values.name === "false"){
      message.error("No puede llamar a su seccion " + values.name);
    } else {
      const doc = await fs.collection(values.name).doc(values.name).get();
      if(doc.exists){
        message.error("Ya Existe una seccion llamada " + values.name);
      } else {
        const set = await fs.collection(values.name).doc(values.name).set(values);
        var update = fs.collection('userData').doc(id);
  
        var setUpdate = update.set({
          section: values.name
        }, { merge: true });

        var val = {
          name: values.name,
          school: values.school,
          list: []          
        };
  
        const create = await fs.collection(values.name).doc(values.name).set(val);
        
        setSection(values.name);
  
        setEffect(!Effect);
      }
    }
  }

  const searchSeccion = () => {
    setSearchSeccion(true);
    setTooltipVisible(false);
  }

  const joinSeccion = async (values: any) => {

    const doc = await fs.collection(values.name).doc(values.name).get();
    console.log(doc.exists);

    if(doc.exists){
      var update = fs.collection('userData').doc(id);
      var setUpdate = update.set({
        section: values.name
      }, { merge: true });

      var list = doc.data() || [];
      var listUsers = list.list.concat([{id, Grades: 0, ...User}]);
      console.log(listUsers);

      var up = fs.collection(values.name).doc(values.name);
      var setUp = up.set({
        list: listUsers
      }, { merge: true });

      setEffect(!Effect);
      message.success("Te has unido exitosamente a la seccion "+values.name);
    } else {
      message.error("No existe una seccion llamada " + values.name);
    }
    setSearchSeccion(false);
    setTooltipVisible(true);
  }
  
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
          <div className="home-body">
            <div>
              <div className="card-body-home">
                <Card 
                  onClick={()=>{history.push('theory');}}
                  bordered={false} 
                  className="card-body-homeStyle card-theory"
                  bodyStyle={{justifyContent: "space-between", display: "flex", alignItems: "center", paddingRight: 5,}}
                >
                  <h2 className="text-botton">Teoria</h2>
                  <BookOutlined className="icon-botton-home"/>
                </Card>
                  <Card 
                    onClick={()=>{setVisible(true); setTooltipVisible(false);}}
                    bordered={false} 
                    className="card-body-homeStyle card-laboratory" 
                    bodyStyle={{justifyContent: "space-between", display: "flex", alignItems: "center", paddingRight: 5,}}
                  >
                    <h2 className="text-botton">Laboratorio</h2>
                    <ToolOutlined className="icon-botton-home"/>
                  </Card> 
              </div>
              { Section !== 'false' ?
              <div className="card-body-home">
                <Card 
                  onClick={()=>{history.push('chat');}}
                  bordered={false} 
                  className="card-body-homeStyle card-task"
                  bodyStyle={{justifyContent: "space-between", display: "flex", alignItems: "center", paddingRight: 5,}}
                >
                  <h2 className="text-botton">Mensajes</h2>
                  <MailOutlined className="icon-botton-home"/>
                </Card>
                { !IsTeacher ?
                  <Card 
                    onClick={()=>{history.push('listUsers');}}
                    bordered={false} 
                    className="card-body-homeStyle card-stats" 
                    bodyStyle={{justifyContent: "space-between", display: "flex", alignItems: "center", paddingRight: 5,}}
                  >
                    <h2 className="text-botton">Compañeros</h2>
                    <SolutionOutlined className="icon-botton-home"/>
                  </Card>
                  :
                  <Card 
                    onClick={()=>{history.push('listUsers');}}
                    bordered={false} 
                    className="card-body-homeStyle card-stats" 
                    bodyStyle={{justifyContent: "space-between", display: "flex", alignItems: "center", paddingRight: 5,}}
                  >
                    <h2 className="text-botton">Alumnos</h2>
                    <SolutionOutlined className="icon-botton-home"/>
                  </Card>
                }
              </div>
              :
              <div className="card-body-home">
                { !IsTeacher ?
                  <Card 
                    onClick={searchSeccion}
                    bordered={false} 
                    className="card-body-search card-Search"
                    bodyStyle={{justifyContent: "space-between", display: "flex", alignItems: "center", paddingRight: 5,}}
                  >
                    <h2 className="text-botton">Buscar Seccion</h2>
                    <SearchOutlined className="icon-botton-home"/>
                  </Card>
                  :
                  <Card 
                    onClick={formRegister}
                    bordered={false} 
                    className="card-body-search card-Search"
                    bodyStyle={{justifyContent: "space-between", display: "flex", alignItems: "center", paddingRight: 5,}}
                  >
                    <h2 className="text-botton">Crear una Seccion</h2>
                    <UsergroupAddOutlined className="icon-botton-home"/>
                  </Card>
                }
              </div>
              }
            </div>
            <div className="robot-home">
              <Tooltip placement="leftTop" color="#1890ff" 
                title={ Section !== 'false' ? text_message_robot : text_message_robot_seccion} 
                visible={RegisterComplete && TooltipVisible}
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

      <Modal title="Completar registro" visible={!RegisterComplete}
        footer={null}
      >
        <Form {...layout} name="nest-register" onFinish={onFinish}>
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
  
      <Modal 
        title="Crear una seccion" 
        visible={FormSeccion}
        footer={null}
        onCancel={onCancel}
      >
        <Form {...layout} name="nest-seccion" onFinish={createSection}>
          <Form.Item name={'name'} label="Nombre" 
            rules={[{ required: true, message: 'Por favor, ingrese el nombre de la seccion!' }]}
          >
            <Input size="large" placeholder="Seccion" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item name={'school'} label="colegio" 
            rules={[{ message: 'Por favor, ingrese el nombre de su colegio!' }]}
          >
            <Input size="large" placeholder="Colegio" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
            <Button type="primary" htmlType="submit">
              Crear
            </Button>
          </Form.Item>
        </Form>
      </Modal>


      <Modal 
        title="Busca tu seccion" 
        visible={SearchSeccion}
        footer={null}
        onCancel={onCancel}
      >
        <Form {...layout} name="nest-search" onFinish={joinSeccion}>
          <Form.Item name={'name'} label="Nombre" 
            rules={[{ required: true, message: 'Por favor, ingrese el nombre de la seccion!' }]}
          >
            <Input size="large" placeholder="Seccion" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
            <Button type="primary" htmlType="submit">
              Buscar
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal title={"Herramientas de laboratorio"} visible={Visible}
        onCancel={onCancel}
        footer={null}
      >
        <div style={{textAlign:"center"}}>
          <div style={{margin: 10}}>
          <Button 
            type="primary" 
            htmlType="submit" 
            onClick={() => history.push('laboratory')}
            style={{backgroundColor:"#f5222d", borderColor:"#96030b"}}
          >
            Generador de tablas de verdad <CalculatorOutlined style={{marginLeft:5}}/>
          </Button>
          </div>
          <a href="https://simuladorcircuitoslogicos.000webhostapp.com/">
            <Button 
              type="primary" 
              htmlType="submit" 
              style={{backgroundColor:"#ff9400", borderColor:"#af6600"}}
            >
              Simulador de circuitos logicos <ApiOutlined style={{marginLeft:5}}/>
            </Button>
          </a> 
        </div>
        </Modal>
    </>
  );
}

export default Home;