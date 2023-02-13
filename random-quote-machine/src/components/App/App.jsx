import React from 'react'
import QuoteBox from '../QuoteBox/QuoteBox'
import QuoteService from '../../services/QuoteService';
import { useState, useEffect } from 'react';

import './App.scss';

export default function App() {

  const [ quote, setQuote ] = useState('');
  const [ auth, setAuth ] = useState('');
  const [ color, setColor ] = useState ('');

  const { getRandomQuote } = QuoteService();

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

  useEffect(() => {
    newQuote();
  }, [])

  return (
    <div className='app' style={{backgroundColor: color}}>
      <QuoteBox quote={{text: quote, auth, color}} newQuote={newQuote} />
    </div>
  )
}
