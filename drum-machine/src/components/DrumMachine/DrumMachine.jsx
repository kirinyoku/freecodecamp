import React from 'react';
import { DrumPad } from '../DrumPad/DrumPad';
import './DrumMachine.css';

export const DrumMachine = () => {

  const drumLabels = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];

  return (
    <div className='drum-machine' id='drum-machine'>
      {drumLabels.map((item, index) => <DrumPad label={item} key={index} />)}
    </div>
  )
}
