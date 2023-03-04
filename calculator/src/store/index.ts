import { createStore } from 'redux';
import { Action } from '../types';

const ACTIONS = {
  formula: 'CHANGE_FORMULA',
  outScreen: 'CHANGE_OUTSCREEN',
  reset: 'RESET',
};

const initialState = {
  formula: '',
  outScreen: 0,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ACTIONS.formula:
      return {
        ...state,
        formula: state.formula + action.payload,
      };
    case ACTIONS.outScreen:
      return {
        ...state,
        outScreen: action.payload,
      };
    case ACTIONS.reset:
      return {
        formula: '',
        outScreen: 0,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export { store, ACTIONS };
