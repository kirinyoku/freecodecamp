import React from 'react';
import './QuoteBox.scss';

export default function QuoteBox( { quote, newQuote } ) {

  const buttonHandler = () => {
    newQuote();
  }

  return (
    <div className='quote' id='quote-box' style={{color: quote.color}}>
      <figure>
        <blockquote id="text">
          <i className='fa fa-quote-left'></i>
          <span className='quote__text'>{quote.text}</span>
        </blockquote>
        <figcaption className='quote__author' id="author">
          &mdash; {quote.auth ?? 'Beautiful Person'}
        </figcaption>
      </figure>
      <footer className='quote__footer'>
        <ul className='quote__social-links' aria-label='social link list'>
          <li aria-label='twitter'>
            <a className='quote__link' href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote.text}" ${quote.auth}`} id="tweet-quote" rel="noreferrer" target="_blank">
              <i className="fa fa-twitter icon" style={{backgroundColor: quote.color}}></i>
            </a>
          </li>
          <li aria-label='tumblr' id="tumblr-quote">
            <a className='quote__link' href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${quote.auth}&content="${quote.text}"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`} rel="noreferrer" target="_blank">
              <i className='fa fa-tumblr icon' style={{backgroundColor: quote.color}}></i>
            </a>
          </li>
        </ul>
        <button onClick={buttonHandler} className='quote__button' style={{backgroundColor: quote.color}} type='button' id="new-quote">New quote</button>
      </footer>
    </div>
  )
}
