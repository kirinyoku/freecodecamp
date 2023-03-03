import React from 'react';
import Props from '../../types';

export default function Button(props: Props) {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.currentTarget.innerHTML);
  }

  return (
    <button
      onClick={(e) => handleClick(e)} 
      className={`py-6 px-8 text-white text-xl hover:opacity-80 transition-opacity ${props.className}`}>
      {props.children}
    </button>
  )
}
