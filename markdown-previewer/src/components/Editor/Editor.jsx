import React from 'react'
import './Editor.scss';

export default function Editor({ input, inputHandler }) {

  return (
    <section className='editor' aria-label='editor'>
      <header className='editor__header'>
        <h2 className='editor__title'>Editor📝</h2>
      </header>
      <textarea value={input} onChange={(event) => inputHandler(event)} name='editor' id='editor' className='editor__field scroll' aria-label='editor input field' autoFocus></textarea>
    </section>
  )
}
