import React from 'react';
import Formula from './PreviousOperand';
import Outscreen from './CurrentOpernad';

export default function Display() {
  return (
    <div className="grid px-2 pt-2 bg-black text-white">
      <Formula />
      <Outscreen />
    </div>
  );
}
