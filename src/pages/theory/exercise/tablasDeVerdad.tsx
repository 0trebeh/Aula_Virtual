import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Card, Image, Button, Radio, Form, message, Modal} from 'antd';
import robot from '../../../img/robot-opcion.png';
import {fs} from '../../../firebase';
import { 
    DoubleRightOutlined
} from '@ant-design/icons';

import Celebration from "../../../components/celebration";

import '../theory.css';

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};

const TablasDeVerdad = (props : any) => {

    const history = useHistory();
    const User = JSON.parse(localStorage.getItem("userData") || "{}");
    const id = JSON.parse(localStorage.getItem("data") || "{}").email;
    const [Visible, setVisible] = useState(false);

    const handleCancel = () => {
        setVisible(!Visible);
        history.push('/theory');
    }; 

    const onFinish = async (values: any) => {
        console.log(values);

        var count = 0;

        if(values.pregunta1 === 'b'){
            count ++;
        }
        if(values.pregunta2 === 'a'){
            count ++;
        }
        console.log(count);

        if(count <= 1){
            message.error("Ohh no, no respondiste correctamente :(");
        }

        if(count >= 2){
            message.success("Felicidades, Has desbloqueado la siguiente parte");
            var {name, lastname, teacher, section, m, y, Progress} = User;
            if(Progress <= 3){
                var data = {
                    name, 
                    lastname, 
                    teacher, 
                    section, 
                    m, 
                    y,
                    Progress: Progress + 1
                }
                const doc = await fs.collection("userData").doc(id).set(data);
            }
            setVisible(!Visible);
        }
    }; 

    var parrafo_1 = 'Que nos muestran las tablas de verdad?: ';
    var parrafo_2 = 'Cuantas entradas tiene el sistmana A + B = S?: ';

    return (
        <div>
            <div style={
                {
                  display: "flex", 
                  justifyContent: 'space-around', 
                  alignItems: "center", 
                  margin: 40
                }
            }>
                <div style={{width: "75%", border:"1px solid #4d68c0", marginBottom: 9, padding: 15}}>
                    <h1>Tablas de Verdad.</h1>       
                    <Form {...layout} name="nest-messages" onFinish={onFinish}>
                        <h3>{parrafo_1}</h3>
                        <Form.Item name={'pregunta1'} 
                            rules={[{ required: true, message: 'Por favor, ingresa tu respuesta!' }]}
                        >
                            <Radio.Group>
                                <Radio value="a">El futuro</Radio><div></div>
                                <Radio value="b">Combinaciones posibles de valores de entrada de un circuito</Radio><div></div>
                                <Radio value="c">Circuitos lógicos</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <h3>{parrafo_2}</h3> 
                        <Form.Item name={'pregunta2'} 
                            rules={[{ required: true, message: 'Por favor, ingresa tu respuesta!' }]}
                        >
                            <Radio.Group>
                                <Radio value="a">Dos A y B</Radio><div></div>
                                <Radio value="b">Uno, la S</Radio><div></div>
                                <Radio value="c">Ninguna</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
                            <Button type="primary" htmlType="submit" >
                                Enviar Respuestas <DoubleRightOutlined style={{marginLeft:5}}/>
                            </Button>
                        </Form.Item>
                    </Form> 
                </div>
                <Card  bordered={false}>
                    <Image
                        width={200}
                        preview={false}
                        src={robot}
                    />
                </Card>
                <Modal visible={Visible}
                    onCancel={handleCancel}
                    footer={null}
                    style={{width: "100%", padding: 0}}
                >
                    <Celebration/>
                </Modal>
            </div>
        </div>
    );
    
}

export default TablasDeVerdad;