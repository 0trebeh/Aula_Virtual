import React from 'react';
import { Card, Image, Button } from 'antd';

import TextToSpeech from '../../../components/textToSpeech';
import circuitos_img from '../../../img/sistema.png';

const SistemaBinarios = (props : any) => {
 
    var parrafo_1 = 'Actualmente la mayoría de las personas utilizamos el sistema decimal (base 10) para realizar operaciones matemáticas y representar cantidades. Este sistema se basa en la combinación de 10 dígitos (del 0 al 9). por eso decimos que su base es 10. ';
    var parrafo_2 = 'El sistema binario es un sistema de numeración en el que los números se representan utilizando únicamente dos valores el 0 y el 1. Por tanto su base es 2. ';
    var parrafo_3 = 'Este sistema de numeración es el lenguaje básico de la informática digital y es el que les permite a las computadoras funcionar. Ya que las computadoras trabajan internamente con 2 niveles. ';
    var parrafo_4 = '0 = no recibo señal eléctrica. ';
    var parrafo_5 = '1 = recibo señal eléctrica. ';
    var parrafo_6 = 'Es decir, tiene dos posibilidades: 0 es que está apagado y 1 es que está encendido. ';

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
                    <h1>Sistema binarios.</h1>
                    <h3>{parrafo_1}</h3>
                    <h3>{parrafo_2}</h3>
                    <h3>{parrafo_3}</h3>
                    <h3>{parrafo_4}</h3>
                    <h3>{parrafo_5}</h3>
                    <h3>{parrafo_6}</h3>

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
                    text={"Sistema binarios. " +parrafo_1 +parrafo_2 +parrafo_3 +parrafo_4 +parrafo_5 +parrafo_6}
                />
            </div>
        </div>
    );
    
}

export default SistemaBinarios;