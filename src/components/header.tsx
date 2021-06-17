import React from 'react';

import { RobotOutlined } from '@ant-design/icons';

import "./header.css"

type Props = {
    text_Subtitle: string;
};

function Header(props: Props) { 
    var text_Title: string = "Circuitos Logicos";

    return (
        <div className="header-content">
            <div className="text-titles">
                <h2 className="text-h-header">{text_Title}</h2>
                <h2 className="text-h-header">|</h2>
                <h3 className="text-h-header">{props.text_Subtitle}</h3> 
            </div>
            <RobotOutlined className="icon-header"/> 
        </div>
    );
  }
  
  export default Header;