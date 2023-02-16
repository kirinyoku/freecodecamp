import React from 'react'
import ReactMarkdown from 'react-markdown';
import './Previewer.scss';

export default function Previewer({ input }) {
  return (
    <div className='previewer'>
      <header className='previewer__header'>
        <h2 className='previewer__title'>Live Preview<sup>🔴</sup></h2>
      </header>
      <ReactMarkdown className='previewer__markdown scroll' id='preview'>
        {input}
      </ReactMarkdown>
    </div>
  )
}
