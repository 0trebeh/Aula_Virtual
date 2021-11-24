import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Modal, Button  } from 'antd';

import Celebration from "../../components/celebration";

import Header from "../../components/header";
import CircuitosLogicos from "./exercise/circuitosLogicos";
import SistemaBinarios from "./exercise/sistemaBinarios";
import AlgebraBooleana from "./exercise/algebraBooleana";
import TablasDeVerdad from "./exercise/tablasDeVerdad";
import CompuertasLogicas from "./exercise/compuertasLogicas";

import { 
    DoubleRightOutlined
} from '@ant-design/icons';

const Exercise = (props : any) => {
    const history = useHistory();
    const [Visible, setVisible] = useState(false);
    const [Next, setNext] = useState("");
    
    const handleCancel = () => {
        setVisible(!Visible);
    }; 

    if(props.location.state.detail === "Circuitos logicos"){
        setNext("Sistema binarios");
    } else if(props.location.state.detail === "Sistema binarios"){
        setNext("Algebra booleana");
    } else if(props.location.state.detail === "Algebra booleana"){
        setNext("Tablas de verdad");
    } else if(props.location.state.detail === "Tablas de verdad"){
        setNext("Compuertas logicas");
    }

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
                        pathname: '/theory/definition',
                        state: { Next }
                    })}
                    style={{backgroundColor:"#ff9400", borderColor:"#af6600"}}
                >
                    Siguiente <DoubleRightOutlined style={{marginLeft:5}}/>
                </Button> 
            </div>

            <Modal visible={Visible}
                onCancel={handleCancel}
                footer={null}
                style={{width: "100%", padding: 0}}
            >
                <Celebration/>
            </Modal>
        </>
    );
}

export default Exercise;