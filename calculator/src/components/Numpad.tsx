import React from 'react';
import Button from './UI/Button';

export default function Numpad() {

  const keys = ['AC', '/', 'x', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', '=', '-', '+'];

  return (
    <div className='grid gap-4 grid-cols-3 max-w-sm'>
      {keys.map((key, index) => {
        return <Button key={index}>{key}</Button>
      })}
    </div>
  )
}
