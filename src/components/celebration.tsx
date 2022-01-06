import React, {useEffect} from 'react';
import {fs} from '../firebase';
import { Image, Tooltip } from 'antd';
import './celebration.css';
import celebration_img from '../img/celebration.png';

const Celebration = (props : any) => {

    const id = JSON.parse(localStorage.getItem("data") || "{}").email;

    useEffect(() => { 
        //refresca los datos del usuario
        const getData = async () => {
            const doc = await fs.collection("userData").doc(id).get();
            localStorage.setItem("userData", JSON.stringify(doc.data()));
        }
        getData();
        console.log("hola adios");
    }, []);
    
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
            <Tooltip placement="leftTop" color="#1890ff" title={" Bien hecho!!! "} visible={true}>
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