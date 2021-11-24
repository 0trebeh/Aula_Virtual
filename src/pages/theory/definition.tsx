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
    DoubleRightOutlined
  } from '@ant-design/icons';

const Definition = (props : any) => {
    const history = useHistory();

    return (
        <>
            <Header 
                text_Subtitle={"Aula Virtual Web"}
                active_iconPerfil={true} 
                active_iconHome={true}
            />

            {   props.location.state.detail === "Circuitos logicos" ?
                <CircuitosLogicos/>:
                props.location.state.detail === "Sistema binarios" ?
                <SistemaBinarios/>:
                props.location.state.detail === "Algebra booleana" ?
                <AlgebraBooleana/>:
                props.location.state.detail === "Tablas de verdad" ?
                <TablasDeVerdad/>:
                props.location.state.detail === "Compuertas logicas" ?
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
                    onClick={() => history.push({
                        pathname: '/theory/exercise',
                        state: { detail: props.location.state.detail }
                    })}
                    style={{backgroundColor:"#ff9400", borderColor:"#af6600"}}
                >
                    Siguiente <DoubleRightOutlined style={{marginLeft:5}}/>
                </Button> 
            </div>
        </>
    );
    
}

export default Definition;