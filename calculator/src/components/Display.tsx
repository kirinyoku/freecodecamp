import React from 'react';
import Props from '../types';
import Formula from './Formula';
import Outscreen from './Outscreen';

export default function Display() {

  return (
    <div className='grid px-2 pt-2 bg-black text-white'>
      <Formula />
      <Outscreen />
    </div>
  )
}
