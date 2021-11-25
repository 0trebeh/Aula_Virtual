import React, { useState } from 'react';
import { Card, Image, Button, Radio, Form, Input } from 'antd';
import robot from '../../../img/robot-opcion.png';
import { 
    DoubleRightOutlined
} from '@ant-design/icons';

import '../theory.css';

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};

const SistemaBinarios = (props : any) => {

    const [Data, setData] = useState(false);

    const onFinish = (values: any) => {
        console.log(values);
    }; 

    var parrafo_1 = 'Se dice que el sismeta binario es de base 2 por?: ';
    var parrafo_2 = 'Las computadoras trabajan internamente con?: ';

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
                    <h1>Sistema Binarios.</h1>       
                    <Form {...layout} name="nest-messages" onFinish={onFinish}>
                        <h3>{parrafo_1}</h3>
                        <Form.Item name={'pregunta1'} 
                            rules={[{ required: true, message: 'Por favor, ingresa tu respuesta!' }]}
                        >
                            <Radio.Group>
                                <Radio value="a">Porque no tiene numero 2</Radio><div></div>
                                <Radio value="b">Porque no es de base 10</Radio><div></div>
                                <Radio value="c">Porque solo tene dos valores</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <h3>{parrafo_2}</h3> 
                        <Form.Item name={'pregunta2'} 
                            rules={[{ required: true, message: 'Por favor, ingresa tu respuesta!' }]}
                        >
                            <Radio.Group>
                                <Radio value="a">Señales electricas</Radio><div></div>
                                <Radio value="b">valores de "0" y "1"</Radio><div></div>
                                <Radio value="c">Sistema binario</Radio>
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

export default SistemaBinarios;