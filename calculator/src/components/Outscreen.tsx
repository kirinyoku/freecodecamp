import React from 'react';

export default function Outscreen() {
  return (
    <div>
      <input 
        readOnly
        value={0}
        type="text" 
        className='w-full bg-black text-white text-right text-2xl outline-none' 
      />
    </div>
  )
}
