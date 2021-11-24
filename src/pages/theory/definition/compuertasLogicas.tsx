import React from 'react';
import { Card, Image, Button, Affix } from 'antd';

import TextToSpeech from '../../../components/textToSpeech';
import or_img from '../../../img/or.png';
import and_img from '../../../img/and.png';
import not_img from '../../../img/not.png';
import tableOr_img from '../../../img/tableOr.png';
import tableAnd_img from '../../../img/tableAnd.png';
import tableNot_img from '../../../img/tableNot.png';
import robot from '../../../img/robot-conector.png';

const CompuertasLogicas = (props : any) => {

    var parrafo_1 = 'Las compuertas lógicas son los circuitos más simples y el corazón de los circuitos lógicos. Básicamente, todas las compuertas lógicas tienen dos entradas y una salida, algunas compuertas lógicas como la compuerta NOT o inversor tienen solo una entrada y una salida. Las entradas de las compuertas lógicas están diseñadas para recibir solo datos binarios (apagado 0 o encendido 1). ';
    var parrafo_2 = 'La compuerta AND es también conocida como “todo o nada”. En el Álgebra de Boole se representa por una multiplicación, por lo tanto para tener la salida en estado activo es necesario que sus entradas tengan un estado binario 1, al tener una entrada inactiva “0” su salida será 0. ';
    var parrafo_3 = 'Su expresión en el Álgebra de Boole es representada por una suma. Esta compuerta se encuentra en estado activo siempre y cuando una de sus entradas tenga un estado binario activo “1”. Para lograr un estado inactivo “0” a la salida, es necesario que todas sus entradas se encuentren en estado inactivo “0”. ';
    var parrafo_4 = 'Su expresión es representada con el símbolo (~), para esta compuerta únicamente se cuenta con una entrada y una salida por lo tanto actúa como un inversor. Si la entrada se encuentra en estado activo “1” se tendrá a la salida un estado inactivo “0” y para el caso contrario, si la entrada se encuentra en estado inactivo “0” a la salida estará en estado activo “1”. ';

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
                    <h1>Compuertas lógicas. </h1>
                    <h3>{parrafo_1}</h3>
                    <h1>AND.</h1>
                    <h3>{parrafo_2}</h3>
                    <div style={{ display: "flex", marginTop: 30 }}>
                        <h3>Su expresión algebraica es:</h3>  
                        <h2 style={{marginLeft: 50}}>Salida = entrada • entrada</h2> 
                    </div>
                    
                    <div style={{ display: "flex", marginTop: 30 }}>
                        <h3>y se representa con el símbolo: </h3>
                        <Image
                            width={200}
                            preview={false}
                            style={{marginLeft: 100}}
                            src={and_img}
                        />
                    </div>

                    <div style={{ display: "flex", marginTop: 30 }}>
                        <h3>su tabla de verdad es: </h3>
                        <Image
                            width={180}
                            preview={false}
                            style={{marginLeft: 100}}
                            src={tableAnd_img}
                        />
                    </div>
                    
                    <h1>OR.</h1>
                    <h3>{parrafo_3}</h3>
                    <div style={{ display: "flex", marginTop: 30 }}>
                        <h3>Su expresión algebraica es:</h3>  
                        <h2 style={{marginLeft: 50}}>Salida = entrada + entrada</h2> 
                    </div>
                    
                    <div style={{ display: "flex", marginTop: 30 }}>
                        <h3>y se representa con el símbolo: </h3>
                        <Image
                            width={200}
                            preview={false}
                            style={{marginLeft: 100}}
                            src={or_img}
                        />
                    </div>

                    <div style={{ display: "flex", marginTop: 30 }}>
                        <h3>su tabla de verdad es: </h3>
                        <Image
                            width={170}
                            preview={false}
                            style={{marginLeft: 100}}
                            src={tableOr_img}
                        />
                    </div>

                    <h1>NOT.</h1>
                    <h3>{parrafo_4}</h3>
                    <div style={{ display: "flex", marginTop: 30 }}>
                        <h3>Su expresión algebraica es:</h3>  
                        <h2 style={{marginLeft: 50}}>Salida = ~entrada</h2> 
                    </div>
                    
                    <div style={{ display: "flex", marginTop: 30 }}>
                        <h3>y se representa con el símbolo: </h3>
                        <Image
                            width={200}
                            preview={false}
                            style={{marginLeft: 100}}
                            src={not_img}
                        />
                    </div>

                    <div style={{ display: "flex", marginTop: 30 }}>
                        <h3>su tabla de verdad es: </h3>
                        <Image
                            width={140}
                            preview={false}
                            style={{marginLeft: 100}}
                            src={tableNot_img}
                        />
                    </div>

                </div>
                <Card  bordered={false}>
                    <Affix offsetTop={120} offsetBottom={20} onChange={affixed => console.log(affixed)}>
                        <div className="robot-home">
                            <Image
                                width={300}
                                preview={false}
                                src={robot}
                            />
                        </div>
                    </Affix>
                </Card>
            </div>
            <div style={{marginLeft: 40}}>
                <TextToSpeech 
                    text={
                        "Compuertas lógicas. "+ parrafo_1+ 
                        " . AND. "+ parrafo_2+
                        " . OR. "+ parrafo_3+
                        " . Not. "+ parrafo_4
                    }
                />
            </div>
        </div>
    );
    
}

export default CompuertasLogicas;