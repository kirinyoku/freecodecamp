import React from 'react';
import { useState } from 'react';
import { DrumPad } from '../DrumPad/DrumPad';
import './DrumMachine.css';

export const DrumMachine = () => {

  const [sampleName, setSampleName] = useState('Heater-1');
  const drumPadLabels = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];

  return (
    <div className='drum-machine' id='drum-machine'>
      <div className='pad'>
        { drumPadLabels.map((item, index) => (
            <DrumPad 
              key={index}   
              label={item} 
              setSampleName={setSampleName} />
          ))
        }
      </div>
      <div className='controls'>
        <h2 className='display' id='display'>{sampleName}</h2>
      </div>
    </div>
  )
}
