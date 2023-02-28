import React from 'react';
import { useState, useEffect } from 'react';
import { DrumPad } from '../DrumPad/DrumPad';
import Heater1 from '../../assets/Heater-1.mp3';
import Heater2 from '../../assets/Heater-2.mp3';
import Heater3 from '../../assets/Heater-3.mp3';
import Heater4 from '../../assets/Heater-4_1.mp3';
import Heater6 from '../../assets/Heater-6.mp3';
import KickNHat from '../../assets/Kick_n_Hat.mp3';
import RP4Kick from '../../assets/RP4_KICK_1.mp3';
import OpenHH from '../../assets/Dsc_Oh.mp3';
import ClosedHH from '../../assets/Cev_H2.mp3';
import './DrumMachine.css';

export const DrumMachine = React.memo(() => {

  const [sampleName, setSampleName] = useState('Heater-1');
  const [volume, setVolume] = useState(50);
  const drumPadLabels = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];

  const heater1 = new Audio(Heater1);
  const heater2 = new Audio(Heater2);
  const heater3 = new Audio(Heater3);
  const heater4 = new Audio(Heater4);
  const heater6 = new Audio(Heater6);
  const kickNHat = new Audio(KickNHat);
  const rp4Kick = new Audio(RP4Kick);
  const openHH = new Audio(OpenHH);
  const closedHH = new Audio(ClosedHH);

  const drumHandler = (e) => {
    const id = e.currentTarget.id || e.key;
    switch (id) {
      case 'q':
        heater1.load();
        heater1.play();
        setSampleName('Heater-1');
        break;
      case 'w':
        heater2.load();
        heater2.play();
        setSampleName('Heater-2');
        break;
      case 'e':
        heater3.load();
        heater3.play();
        setSampleName('Heater-3');
        break;
      case 'a':
        heater4.load();
        heater4.play();
        setSampleName('Heater-4');
        break;
      case 's':
        heater6.load();
        heater6.play();
        setSampleName('Clap');
        break;
      case 'd':
        openHH.load();
        openHH.play();
        setSampleName('Open HH');
        break;
      case 'z':
        kickNHat.load();
        kickNHat.play();
        setSampleName('Kick n\' Hat');
        break;
      case 'x':
        rp4Kick.load();
        rp4Kick.play();
        setSampleName('Kick');
        break;
      case 'c':
        closedHH.load();
        closedHH.play();
        setSampleName('Closed HH');
        break;
      default:
        return;
    }
  }

  return (
    <div className='drum-machine' id='drum-machine'>
      <div className='pad'>
        { drumPadLabels.map((item, index) => (
            <DrumPad 
              key={index}   
              label={item} 
              drumHandler={drumHandler} 
              setSampleName={setSampleName}
            />
          ))
        }
      </div>
      <div className='controls'>
        <h2 className='display' id='display'>{sampleName}</h2>
      </div>
    </div>
  )
})
