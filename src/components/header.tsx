import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Session} from './auth';

import { RobotOutlined, HomeOutlined } from '@ant-design/icons';

import "./header.css"

type Props = {
    text_Subtitle: string;
    active_iconPerfil: Boolean;
    active_iconHome: Boolean; 
};

function Header(props: Props) { 

    const history = useHistory();

    useEffect(() => {
        //verificar sesion de usuario
        const user = async () => {
            await Session();
            if(localStorage.getItem("session") === "false"){
                console.log("sin sesion");
                history.push('');
            }
        }
        user();
    }, []);

    var text_Title: string = "Circuitos Logicos";

    return (
        <div className="header-content">
            <div className="text-titles">
                <h2 className="text-h-header">{text_Title}</h2>
                <h2 className="text-h-header">|</h2>
                <h3 className="text-h-header">{props.text_Subtitle}</h3> 
            </div>
            <div>
            {   props.active_iconHome ?
                <HomeOutlined 
                    className="icon-header icon-margin" 
                    onClick={() => history.push('/home')}
                />
                :
                null
            }
            {   props.active_iconPerfil ?
                <RobotOutlined 
                    className="icon-header"
                    onClick={() => history.push('/profile')}
                /> 
                :
                null
            }
            </div>
        </div>
    );
  }
  
  export default Header;