import React, { useState } from 'react';
// @ts-ignore
import { useSpeechSynthesis } from 'react-speech-kit';
import {SoundOutlined} from '@ant-design/icons';
 
const TextToSpeech = (props : any) => {
  const text = props.text;
  const pitch = 1;
  const rate = 1;
  
  const onEnd = () => {
    // You could do something here after speaking has finished
  };
  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    onEnd,
  });

  return (
    <>
        {!supported && (
          <p>
            Oh no, it looks like your browser doesn&#39;t support Speech
            Synthesis.
          </p>
        )}
        {supported && (
          <React.Fragment>

            {speaking ? (
              <button 
                style={{color: "red", padding: 5, paddingLeft: 10, paddingRight: 10}} 
                type="button" 
                onClick={cancel}
              >
                Detener
              </button>
            ) : (
              <button
                style={{color: "blue", padding: 5, paddingLeft: 10, paddingRight: 10}}
                type="button"
                onClick={() => speak({ text, rate, pitch })}
              >
                Leer
                <SoundOutlined style={{marginLeft: 5}}/>
              </button>
            )}
          </React.Fragment>
        )}
    </>
  );
};

export default TextToSpeech;