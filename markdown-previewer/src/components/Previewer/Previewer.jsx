import React from 'react'
import ReactMarkdown from 'react-markdown';
import './Previewer.scss';

export default function Previewer({ input }) {
  return (
    <section className='previewer' aria-label='previewer'>
      <header className='previewer__header'>
        <h2 className='previewer__title'>Live Preview <sup>🔴</sup></h2>
      </header>
      <ReactMarkdown className='previewer__markdown scroll' id='preview' aria-label='previewer output field'>
        {input}
      </ReactMarkdown>
    </section>
  )
}
