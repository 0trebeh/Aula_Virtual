import React from 'react';
import { Card, Image, Button } from 'antd';

import TextToSpeech from '../../../components/textToSpeech';
import circuitos_img from '../../../img/algebra.png';

import '../theory.css';

const AlgebraBooleana = (props : any) => {

    var parrafo_1 = 'Es una rama especial del álgebra que se usa principalmente en electrónica digital. El álgebra de Boole es un método para simplificar los circuitos lógicos. ';
    var parrafo_2 = 'Por lo tanto, también se llama como "Cambio de álgebra". Podemos representar el funcionamiento de los circuitos lógicos utilizando números, siguiendo algunas reglas, que son bien conocidas como "Leyes del álgebra de Boole". ';
    var parrafo_3 = 'La lógica booleana solo permite dos estados del circuito, como Verdadero y Falso. Estos dos estados están representados por 1 y 0, donde 1 representa el estado "Verdadero" y 0 representa el estado "Falso". ';
    var parrafo_4 = 'Al formular expresiones matemáticas para circuitos lógicos es importante tener conocimiento del álgebra booleana, que define las reglas para expresar enunciados lógicos binarios. algunas de las leyes e identidades más utilizadas se presentan a continuación: ';
    var parrafo_5 = '"A", reprensetara a un número binario, que puede ser tanto un 0 como un 1. y ~A se lee como "A negado" y es el inverso del A, es decir si A es 1 ~A es 0 y viceversa. '
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
                    <h1>Álgebra booleana.</h1>
                    <h3>{parrafo_1}</h3>
                    <h3>{parrafo_2}</h3>
                    <h3>{parrafo_3}</h3>
                    <h1>Leyes e identidades del álgebra booleana.</h1>
                    <h3>{parrafo_4}</h3>
                    <h3>{parrafo_5}</h3>
                    <h2>Leyes fundamentales:</h2>
                    <div style={{textAlign:"center", border:"1px solid #00a500", marginBottom: 7}}>
                        <h2>OR</h2>
                        <h3> A + 0 = A</h3>
                        <h3> A + 1 = 1</h3>
                        <h3> A + A = A</h3>
                        <h3> A + ~A = 1</h3>
                    </div>
                    <div style={{textAlign:"center", border:"1px solid #ff9400", marginBottom: 7}}>
                        <h2>AND</h2>
                        <h3> A • 0 = 0</h3>
                        <h3> A • 1 = A</h3>
                        <h3> A • A = A</h3>
                        <h3> A • ~A = 0</h3>
                    </div>
                    <div style={{textAlign:"center", border:"1px solid #61338b", marginBottom: 15}}>
                        <h2>NOT</h2>
                        <h3> ~(~A) = A</h3>
                    </div>
                    <h2>Leyes conmutativas: </h2>
                    <div style={{textAlign:"center", border:"1px solid #4d68c0", marginBottom: 15}}>
                        <h3> A + B = B + A</h3>
                        <h3> A ∙ B = B ∙ A</h3>
                    </div>
                    <h2>Leyes asociativas:</h2>
                    <div style={{textAlign:"center", border:"1px solid #4d68c0", marginBottom: 15}}>
                        <h3> (A + B) + C = A + (B + C)</h3>
                        <h3> (A ∙ B) ∙ C = A ∙ (B ∙ C)</h3>
                    </div>
                    <h2>Leyes distributivas:</h2>
                    <div style={{textAlign:"center", border:"1px solid #4d68c0", marginBottom: 5}}>
                        <h3> A ∙ (B + C) = (A ∙ B) + (A ∙ C)</h3>
                        <h3> A + (B ∙ C) = (A + B) ∙ (A + C)</h3>
                    </div>

                </div>
                <Card  bordered={false}>
                    <Image
                        width={200}
                        preview={false}
                        src={circuitos_img}
                    />
                </Card>
            </div>
            <div style={{marginLeft: 40}}>
                <TextToSpeech 
                    text= 
                    {
                        "álgebra booleana. " 
                        +parrafo_1 +parrafo_2 +parrafo_3 
                        + ". Leyes e identidades del álgebra booleana. "
                        +parrafo_4 
                    } 
                />
            </div>
        </div>
    );
    
}

export default AlgebraBooleana;