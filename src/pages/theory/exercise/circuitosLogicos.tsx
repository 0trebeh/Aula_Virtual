import React, { useState } from 'react';
import { Card, Image, Button } from 'antd';
import robot from '../../../img/robot-opcion.png';

import '../theory.css';

const CircuitosLogicos = (props : any) => {

    const [Data, setData] = useState(false);

    var parrafo_1 = ' ';

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
                <div>
                    <h1>Circuitos Logicos.</h1>
                    <h3>{parrafo_1}</h3>        
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

export default CircuitosLogicos;