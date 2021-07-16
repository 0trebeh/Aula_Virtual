import React from 'react';
import notFound_robot from '../img/notFound_robot.png';
import { Image, Tooltip, Card } from 'antd';

const Notfound = () => {
  const text_message_robot: string = "Hola!, acompañame a conocer el mundo de los circuitos logicos. La magia que mueve a la tecnologia.";
  
  return (
    <>
      <Tooltip placement="rightTop" color="#1890ff" title={text_message_robot} visible={true}>
        <Image
            width={300}
            preview={false}
            src={notFound_robot}
        />
        </Tooltip>
    </>
  );
}

export default Notfound;