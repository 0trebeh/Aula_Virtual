import React from 'react';
import { Card, Image, Button } from 'antd';

import TextToSpeech from '../../../components/textToSpeech';
import circuitos_img from '../../../img/circuitos-electronicos-digitales.png';

const CircuitosLogicos = (props : any) => {

    var text_intro = "Con esta lectura y las que prosiguen, aprenderás sobre el sistema binario que es el que permite a las computadoras funcionar. Tendrás una noción básica de cómo se representan los números y letras a partir de 1 y 0. Conocerás acerca del álgebra de boole y sus tres operaciones básicas OR, AND y NOT. Y cómo con estas es posible construir circuitos electrónicos llamados compuertas lógicas, y aprenderás cómo representar estas compuertas lógicas con tablas de verdad. ";
    
    var circuitos_1 = 'Son circuitos encargados de procesar las señales binarias (información digital). Es decir, reciben la información en forma binaria, con valores de "1" y "0".  y devuelve una salida dependiendo del proceso que se ejecute. ';
    var circuitos_2 = 'El proceso que se ejecuta utiliza como herramienta álgebra booleana que maneja valores de "1" y "0" para el análisis y diseño de sistemas digitales, como teléfonos y computadoras. ';
    var circuitos_3 = 'Los Circuitos Lógicos están compuestos por elementos digitales como la compuerta AND (Y), compuerta OR (O), compuerta NOT (NO) y combinaciones de estos mismos. que veremos a continuación. ';
    
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
                    <h3 style={{color:"gray"}}>{text_intro}</h3>
                    <h1>Circuitos lógicos.</h1>
                    <h3>{circuitos_1}</h3>
                    <h3>{circuitos_2}</h3>
                    <h3>{circuitos_3}</h3>
                </div>
                <Card  bordered={false}>
                    <Image
                        width={300}
                        preview={false}
                        src={circuitos_img}
                    />
                </Card>
            </div>
            <div style={{marginLeft: 40}}>
                <TextToSpeech 
                    text={text_intro + "Circuitos lógicos. " + circuitos_1 + circuitos_2 + circuitos_3}
                />
            </div>
        </div>
    );
    
}

export default CircuitosLogicos;