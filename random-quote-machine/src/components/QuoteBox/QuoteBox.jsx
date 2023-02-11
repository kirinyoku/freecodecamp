import React from 'react';

import './QuoteBox.scss';

export default function QuoteBox() {
  return (
    <div className='quote' id='quote-box'>
      <figure>
        <blockquote id="text">
          <i className='fa fa-quote-left'></i>
          <span className='quote__text'>Life shrinks or expands in proportion to one’s courage.</span>
        </blockquote>
        <figcaption className='quote__author' id="author">
          &mdash; Anais Nin
        </figcaption>
      </figure>
      <footer className='quote__footer'>
        <ul className='quote__social-links' aria-label='social link list'>
          <li aria-label='twitter'>
            <a className='quote__link' href="https://twitter.com" id="tweet-quote" rel="noreferrer" target="_blank">
              <i className="fa fa-twitter icon"></i>
            </a>
          </li>
          <li aria-label='facebook' id="facebook-quote" rel="noreferrer" target="_blank">
            <a className='quote__link' href="https://facebook.com">
              <i className='fa fa-tumblr icon'></i>
            </a>
          </li>
        </ul>
        <button className='quote__button' type='button' id="new-quote">New quote</button>
      </footer>
    </div>
  )
}
