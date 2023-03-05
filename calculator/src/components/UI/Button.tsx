import React from 'react';
import { Props } from '../../types';
import { ACTIONS } from '../../store';
import { useDispatch } from 'react-redux';

export default function Button(props: Props) {
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const keyValue = e.currentTarget.textContent;
    if (!Number.isNaN(Number(keyValue)) || keyValue === '.') {
      dispatch({
        type: ACTIONS.ADD_DIGITS,
        payload: keyValue,
      });
    }
    if (keyValue === 'AC') {
      dispatch({
        type: ACTIONS.RESET,
      });
    }
    if (keyValue === '+' || keyValue === '-' || keyValue === '÷' || keyValue === 'x') {
      dispatch({
        type: ACTIONS.CHOOSE_OPERATION,
        payload: keyValue,
      });
    }
    if (keyValue === '=') {
      dispatch({
        type: ACTIONS.EVALUATE,
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
