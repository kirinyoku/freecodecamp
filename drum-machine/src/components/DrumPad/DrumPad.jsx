import React from 'react';
import './DrumPad.css';

export const DrumPad = React.memo(({ label, drumHandler }) => {

  return (
    <span onClick={(e) => drumHandler(e)} className='drum-pad' id={label}>
      { label }
    </span>
  )
})
