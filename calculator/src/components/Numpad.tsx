import React from 'react';
import Button from './UI/Button';

export default function Numpad() {

  return (
    <div className='grid gap-4 grid-cols-3 max-w-sm'>
      <Button className="bg-red-500">AC</Button>
      <Button className='bg-gray-400'>/</Button>
      <Button className='bg-gray-400'>x</Button>
      <Button className='bg-gray-600'>7</Button>
      <Button className='bg-gray-600'>8</Button>
      <Button className='bg-gray-600'>9</Button>
      <Button className='bg-gray-400'>-</Button>
      <Button className='bg-gray-600'>4</Button>
      <Button className='bg-gray-600'>5</Button>
      <Button className='bg-gray-600'>6</Button>
      <Button className='bg-gray-400'>+</Button>
      <Button className='bg-gray-600'>1</Button>
      <Button className='bg-gray-600'>2</Button>
      <Button className='bg-gray-600'>3</Button>
      <Button className='bg-gray-600'>0</Button>
      <Button className='bg-gray-600'>.</Button>
      <Button className='bg-blue-500' >=</Button>
    </div>
  )
}
