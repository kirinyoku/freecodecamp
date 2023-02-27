import React from 'react';
import Heater1 from '../../assets/Heater-1.mp3';
import Heater2 from '../../assets/Heater-2.mp3';
import Heater3 from '../../assets/Heater-3.mp3';
import Heater4 from '../../assets/Heater-4_1.mp3';
import Heater6 from '../../assets/Heater-6.mp3';
import KickNHat from '../../assets/Kick_n_Hat.mp3';
import RP4Kick from '../../assets/RP4_KICK_1.mp3';
import OpenHH from '../../assets/Dsc_Oh.mp3';
import ClosedHH from '../../assets/Cev_H2.mp3';
import './DrumPad.css';

export const DrumPad = React.memo(({ label, setSampleName }) => {

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
    const id = e.currentTarget.id;
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
        console.log('default');
    }
  }

  return (
    <span onClick={(e) => drumHandler(e)} className='drum-pad' id={label}>
      { label }
    </span>
  )
})
