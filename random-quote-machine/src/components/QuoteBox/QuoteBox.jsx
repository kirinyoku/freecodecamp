import React from 'react';
import QuoteService from '../../services/QuoteService';
import { useState, useEffect } from 'react';
import './QuoteBox.scss';

export default function QuoteBox() {

  const [ quote, setQuote ] = useState('');
  const [ auth, setAuth ] = useState('');
  const [ color, setColor ] = useState ('');

  const { getRandomQuote } = QuoteService();
  
  useEffect(() => {
    newQuote();
  }, [])

  const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    if (parseInt(color.substring(1), 16) > 0xffffff/2) {
      return getRandomColor();
    } else {
      return color;
    }
  }

  const newQuote = () => {
    getRandomQuote().then(res => {
      setQuote(res.quote);
      setAuth(res.auth);
      setColor(getRandomColor());
    });
  }

  const buttonHandler = () => {
    newQuote();
  }

  return (
    <div className='quote' id='quote-box' style={{color: color}}>
      <figure>
        <blockquote id="text">
          <i className='fa fa-quote-left'></i>
          <span className='quote__text'>{quote}</span>
        </blockquote>
        <figcaption className='quote__author' id="author">
          &mdash; {auth ?? 'Beautiful Person'}
        </figcaption>
      </figure>
      <footer className='quote__footer'>
        <ul className='quote__social-links' aria-label='social link list'>
          <li aria-label='twitter'>
            <a className='quote__link' href="https://twitter.com" id="tweet-quote" rel="noreferrer" target="_blank">
              <i className="fa fa-twitter icon" style={{backgroundColor: color}}></i>
            </a>
          </li>
          <li aria-label='facebook' id="facebook-quote" rel="noreferrer" target="_blank">
            <a className='quote__link' href="https://facebook.com">
              <i className='fa fa-tumblr icon' style={{backgroundColor: color}}></i>
            </a>
          </li>
        </ul>
        <button onClick={buttonHandler} className='quote__button' style={{backgroundColor: color}} type='button' id="new-quote">New quote</button>
      </footer>
    </div>
  )
}
