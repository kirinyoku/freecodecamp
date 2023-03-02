import React from 'react';
import Props from '../../types';

export default function Button(props: Props) {
  return (
    <button className={`h-12 border ${props.className}`}>
      {props.children}
    </button>
  )
}
