import React from 'react';
import Props from '../../types';

export default function Button({children}: Props) {
  return (
    <button className='h-12 border'>
      {children}
    </button>
  )
}
