import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Button  } from 'antd';

import Header from "../../components/header";
import CircuitosLogicos from "./exercise/circuitosLogicos";
import SistemaBinarios from "./exercise/sistemaBinarios";
import AlgebraBooleana from "./exercise/algebraBooleana";
import TablasDeVerdad from "./exercise/tablasDeVerdad";
import CompuertasLogicas from "./exercise/compuertasLogicas";

import { 
    DoubleRightOutlined,
    DoubleLeftOutlined
} from '@ant-design/icons';

const Exercise = () => {
    const history = useHistory();
    const next = JSON.parse(localStorage.getItem("next") || "{Circuitos logicos}");

    /*const nextPage = async () => {
        if(next === "Compuertas logicas"){
            //
        } else {
            if(next === "Circuitos logicos"){
                await localStorage.setItem("next", JSON.stringify("Sistema binarios"));
            } else if(next === "Sistema binarios"){
                await localStorage.setItem("next", JSON.stringify("Algebra booleana"));
            } else if(next === "Algebra booleana"){
                await localStorage.setItem("next", JSON.stringify("Tablas de verdad"));
            } else if(next === "Tablas de verdad"){
                await localStorage.setItem("next", JSON.stringify("Compuertas logicas"));
            }
            history.push('/theory/definition');
        }
        
    }*/

    return (
        <>
            <Header 
                text_Subtitle={"Aula Virtual Web"}
                active_iconPerfil={true} 
                active_iconHome={true}
            />

            {   next === "Circuitos logicos" ?
                <CircuitosLogicos/>:
                next === "Sistema binarios" ?
                <SistemaBinarios/>:
                next === "Algebra booleana" ?
                <AlgebraBooleana/>:
                next === "Tablas de verdad" ?
                <TablasDeVerdad/>:
                next === "Compuertas logicas" ?
                <CompuertasLogicas/>:
                null
            }
            
            <div style={{
                marginTop: 10,
                marginLeft: 40, 
            }}>
                <Button 
                    type="primary" 
                    htmlType="submit" 
                    onClick={() => history.push('/theory/definition')}
                    style={{backgroundColor:"#ff9400", borderColor:"#af6600",  marginRight:30}}
                >
                    <DoubleLeftOutlined style={{marginRight:5}}/> Volver 
                </Button>
                <Button 
                    type="primary" 
                    htmlType="submit" 
                    /*onClick={() => nextPage()}*/
                    style={{backgroundColor:"#ff9400", borderColor:"#af6600"}}
                >
                    Siguiente <DoubleRightOutlined style={{marginLeft:5}}/>
                </Button>       
            </div>
        </>
    );
}

export default Exercise;