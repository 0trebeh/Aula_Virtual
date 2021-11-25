import React from 'react';
import {useHistory} from 'react-router-dom';
import { Button } from 'antd';

import Header from "../../components/header";
import CircuitosLogicos from "./definition/circuitosLogicos";
import SistemaBinarios from "./definition/sistemaBinarios";
import AlgebraBooleana from "./definition/algebraBooleana";
import TablasDeVerdad from "./definition/tablasDeVerdad";
import CompuertasLogicas from "./definition/compuertasLogicas";

import { 
    DoubleRightOutlined,
    DoubleLeftOutlined
  } from '@ant-design/icons';

const Definition = () => {
    const history = useHistory();
    const next = JSON.parse(localStorage.getItem("next") || "{Circuitos logicos}");

    const backPage = async() => {
        if(next === "Circuitos logicos"){
            await history.push('/theory');
        } else {
            if(next === "Sistema binarios"){
                await localStorage.setItem("next", JSON.stringify("Circuitos logicos"));
            } else if(next === "Algebra booleana"){
                await localStorage.setItem("next", JSON.stringify("Sistema binarios"));
            } else if(next === "Tablas de verdad"){
                await localStorage.setItem("next", JSON.stringify("Algebra booleana"));
            }else if(next === "Compuertas logicas"){
                await localStorage.setItem("next", JSON.stringify("Tablas de verdad"));
            }
            history.push('/theory/exercise');
        }
    }

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
                    onClick={() => backPage()}
                    style={{backgroundColor:"#ff9400", borderColor:"#af6600",  marginRight:30}}
                >
                    <DoubleLeftOutlined style={{marginRight:5}}/> Volver 
                </Button>
                <Button 
                    type="primary" 
                    htmlType="submit" 
                    onClick={() => history.push('/theory/exercise')}
                    style={{backgroundColor:"#ff9400", borderColor:"#af6600"}}
                >
                    Siguiente <DoubleRightOutlined style={{marginLeft:5}}/>
                </Button> 
            </div>
        </>
    );
    
}

export default Definition;