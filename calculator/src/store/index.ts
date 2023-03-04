import { createStore } from 'redux';
import { Action } from '../types';

const ACTIONS = {
  formula: 'CHANGE_FORMULA',
  outScreen: 'CHANGE_OUTSCREEN',
};

const initialState = {
  formula: '0',
  outScreen: 0,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ACTIONS.formula:
      return {
        ...state,
        formula: action.payload,
      };
    case ACTIONS.outScreen:
      return {
        ...state,
        outScreen: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export { store, ACTIONS };
