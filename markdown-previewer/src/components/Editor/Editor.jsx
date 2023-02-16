import React from 'react'
import './Editor.scss';

export default function Editor({ input, inputHandler }) {

  return (
    <div className='editor'>
      <header className='editor__header'>
        <h2 className='editor__title'>Editor</h2>
      </header>
      <textarea value={input} onChange={(event) => inputHandler(event)} name='editor' id='editor' className='editor__field' autoFocus></textarea>
    </div>
  )
}
