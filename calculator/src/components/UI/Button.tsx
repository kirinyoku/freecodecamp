import React from 'react';
import { Props } from '../../types';
import { ACTIONS } from '../../store';
import { useDispatch } from 'react-redux';

export default function Button(props: Props) {
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const keyValue = e.currentTarget.textContent;
    // checking if the key value is a number
    if (!Number.isNaN(Number(keyValue))) {
      dispatch({
        type: ACTIONS.outScreen,
        payload: keyValue,
      });
    }
    if (keyValue === 'AC') {
      dispatch({
        type: ACTIONS.outScreen,
        payload: 0,
      });
    }
  };

  return (
    <button
      onClick={(e) => handleClick(e)}
      className={`py-6 px-8 text-white text-xl hover:opacity-80 transition-opacity ${props.className}`}>
      {props.children}
    </button>
  );
}
