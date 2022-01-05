import React, { useState } from 'react';
import { Card, Image, Button, Radio, Form, message } from 'antd';
import robot from '../../../img/robot-opcion.png';
import {fs} from '../../../firebase';
import { 
    DoubleRightOutlined
} from '@ant-design/icons';

import or_img from '../../../img/or.png';
import and_img from '../../../img/and.png';
import not_img from '../../../img/not.png';

import '../theory.css';

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};

const CompuertasLogicas = (props : any) => {

    const User = JSON.parse(localStorage.getItem("userData") || "{}");
    const id = JSON.parse(localStorage.getItem("data") || "{}").email;
    const [Data, setData] = useState(false);

    const onFinish = async (values: any) => {
        console.log(values);

        var count = 0;

        if(values.pregunta1 == 'b'){
            count ++;
        }
        if(values.pregunta2 == 'c'){
            count ++;
        }
        if(values.pregunta3 == 'a'){
            count ++;
        }
        console.log(count);

        if(count == 0){
            message.error("Ohh no, no respondiste correctamente :(");
        }

        if(count >= 1){
            message.success("Felicidades, Has desbloqueado la siguiente parte");
            var {name, lastname, teacher, section, m, y, Progress} = User;
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
    }; 

    var parrafo_1 = 'Selecciona a que compuerta lógica corresponde el símbolo ';
    var parrafo_2 = 'Selecciona a que compuerta lógica corresponde el símbolo  ';
    var parrafo_3 = 'Selecciona a que compuerta lógica corresponde el símbolo ';

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
                    <h1>Compuertas lógicas.</h1>       
                    <Form {...layout} name="nest-messages" onFinish={onFinish}>
                        
                        <div style={{ display: "flex", marginTop: 30 }}>
                            <h3>{parrafo_1}</h3>
                            <Image
                                width={100}
                                preview={false}
                                style={{marginLeft: 50}}
                                src={or_img}
                            />
                        </div>
                        <Form.Item name={'pregunta1'} 
                            rules={[{ required: true, message: 'Por favor, ingresa tu respuesta!' }]}
                        >
                            <Radio.Group>
                                <Radio value="a">Compuerta NOT</Radio><div></div>
                                <Radio value="b">Compuerta OR</Radio><div></div>
                                <Radio value="c">Compuerta AND</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <div style={{ display: "flex", marginTop: 30 }}>
                            <h3>{parrafo_2}</h3>
                            <Image
                                width={100}
                                preview={false}
                                style={{marginLeft: 50}}
                                src={not_img}
                            />
                        </div>
                        <Form.Item name={'pregunta3'} 
                            rules={[{ required: true, message: 'Por favor, ingresa tu respuesta!' }]}
                        >
                            <Radio.Group>
                                <Radio value="a">Compuerta NOT</Radio><div></div>
                                <Radio value="b">Compuerta OR</Radio><div></div>
                                <Radio value="c">Compuerta AND</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <div style={{ display: "flex", marginTop: 30 }}>
                            <h3>{parrafo_3}</h3>
                            <Image
                                width={100}
                                preview={false}
                                style={{marginLeft: 50}}
                                src={and_img}
                            />
                        </div> 
                        <Form.Item name={'pregunta2'} 
                            rules={[{ required: true, message: 'Por favor, ingresa tu respuesta!' }]}
                        >
                            <Radio.Group>
                                <Radio value="a">Compuerta NOT</Radio><div></div>
                                <Radio value="b">Compuerta OR</Radio><div></div>
                                <Radio value="c">Compuerta AND</Radio>
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
            </div>
        </div>
    );
    
}

export default CompuertasLogicas;