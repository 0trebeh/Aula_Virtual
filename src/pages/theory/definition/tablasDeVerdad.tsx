import React from 'react';
import { Card, Image, Button } from 'antd';

import TextToSpeech from '../../../components/textToSpeech';
import tabla_img from '../../../img/Componentes-de-una-tabla-de-verdad.png';
import variable_1 from '../../../img/Variable-1.png';
import variable_2 from '../../../img/variable-2.png';

const TablasDeVerdad = (props : any) => {

    var parrafo_1 = 'Es una construcción de todas las combinaciones posibles de los valores de entrada de un sistema o compuerta lógica. la tabla de verdad nos dice en qué situaciones la salida de estos es 1 o verdadero y en cuales es 0 o falso. ';
    var parrafo_2 = 'Para construir la tabla de verdad primero hay que saber cuántas entradas tiene el sistema o la compuerta lógica y como cada entrada tiene dos valores posibles “0” y “1”. Habrá 2n (2 elevado a ‘n’) combinaciones posibles de valores. ';
    var parrafo_3 = 'Existen las tablas de verdad para cada una de las compuertas lógicas como veremos en la próxima sección. ';
    
    return (
        <div>
            <div style={
                {
                  display: "flex", 
                  justifyContent: 'space-around', 
                  alignItems: "center", 
                  margin: 40,
                  marginTop: 0
                }
            }>
                <div>
                    <h1>Tabla de verdad. </h1>
                    <h3>{parrafo_1}</h3>
                    <h3>{parrafo_2}</h3>
                    <h3>{parrafo_3}</h3>
                    <div style={{textAlign:"center", marginTop: 20}}>
                        <Image
                            width={600}
                            preview={false}
                            src={tabla_img}
                        />
                    </div>
                </div>
                <Card  bordered={false}>
                    <Image
                        width={200}
                        preview={false}
                        src={variable_1}
                    />
                    <Image
                        width={200}
                        preview={false}
                        src={variable_2}
                    />
                </Card>
            </div>
            <div style={{marginLeft: 40}}>
                <TextToSpeech 
                    text={"Tabla de verdad. "+ parrafo_1+ parrafo_2+ parrafo_3}
                />
            </div>
        </div>
    );
    
}

export default TablasDeVerdad;