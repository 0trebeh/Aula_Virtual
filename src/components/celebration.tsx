import React from 'react';
import { Image, Tooltip } from 'antd';
import './celebration.css';
import celebration_img from '../img/celebration.png';

const Celebration = (props : any) => {
    
    return (
        <div 
            style={
                {
                    textAlign: "center", 
                    width: "100%",
                    paddingTop:  50
                }
            }
            className="body-Celebration"
        >
            <Tooltip placement="leftTop" color="#1890ff" title={" Felicidades!!! "} visible={true}>
                <Image
                width={300}
                preview={false}
                src={celebration_img}
            />
            </Tooltip>  
        </div>
    );
}

export default Celebration;