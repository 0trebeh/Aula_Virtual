import React from 'react';
import TextToSpeech from '../../components/textToSpeech';

const Diagram = () => {
  const text = "hola mundo, hola perras";
    
    return (
        <TextToSpeech text={text}/>
    );
}

export default Diagram;