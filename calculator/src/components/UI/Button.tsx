import React from 'react';
import { Props } from '../../types';
import { ACTIONS } from '../../store';
import { useDispatch } from 'react-redux';

export default function Button(props: Props) {
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const keyValue = e.currentTarget.textContent;
    if (keyValue !== 'AC' && keyValue !== '=') {
      dispatch({
        type: ACTIONS.formula,
        payload: keyValue,
      });
    }
    // checking if the key value is a number
    if (!Number.isNaN(Number(keyValue))) {
      dispatch({
        type: ACTIONS.outScreen,
        payload: keyValue,
      });
    }
    if (keyValue === 'AC') {
      dispatch({
        type: ACTIONS.reset,
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`py-6 px-8 text-white text-xl hover:opacity-80 transition-opacity ${props.className}`}>
      {props.children}
    </button>
  );
}
