import React from 'react'
import './Editor.scss';

export default function Editor() {
  return (
    <div className='editor'>
      <header className='editor__header'>
        <h2 className='editor__title'>Editor</h2>
      </header>
      <textarea name='editor' id='editor' className='editor__field' autoFocus></textarea>
    </div>
  )
}
