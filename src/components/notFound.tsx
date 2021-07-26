import React from 'react';
import {useHistory} from 'react-router-dom';
import notFound_robot from '../img/notFound_robot.png';
import { Image, Tooltip, Button} from 'antd';

const Notfound = () => {
  const text_message_robot: string = "Oops, la pagina no ha sido encontrada";
  const history = useHistory();

  return (
    <div style={
        {
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            height:"calc(100vh)",
        }
    }>
        <h1>404</h1>
        <Tooltip placement="leftTop" color="#1890ff" title={text_message_robot} visible={true}>
            <Image
                width={300}
                preview={false}
                src={notFound_robot}
            />
        </Tooltip>
        <Button onClick={() => { history.push('') }}>
            Volver al aula
        </Button>
    </div>
  );
}

export default Notfound;