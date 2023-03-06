import { createStore } from 'redux';
import { Action } from '../types';
import { State } from '../types';

const ACTIONS = {
  ADD_DIGITS: 'add digits',
  CHOOSE_OPERATION: 'choose operation',
  EVALUATE: 'evaluate',
  RESET: 'reset',
};

const initialState = {
  previousOperand: '',
  currentOperand: '',
  operation: '',
  overwrite: false,
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ACTIONS.ADD_DIGITS:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: action.payload,
          overwrite: false,
        };
      }
      if (action.payload === '0' && state.currentOperand === '0') {
        return state;
      }
      if (action.payload === '.' && state.currentOperand.includes('.')) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand ?? ''}${action.payload}`,
      };
    case ACTIONS.RESET:
      return {
        ...state,
        previousOperand: '',
        currentOperand: '',
        operation: '',
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand === '' && state.previousOperand === '') {
        return state;
      }
      if (state.previousOperand === '') {
        return {
          ...state,
          operation: action.payload,
          previousOperand: state.currentOperand,
          currentOperand: '',
        };
      }
      if (state.currentOperand === '') {
        return {
          ...state,
          operation: action.payload,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: action.payload,
        currentOperand: '',
      };
    case ACTIONS.EVALUATE:
      if (state.operation === '' || state.currentOperand === '' || state.previousOperand === '') {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: '',
        operation: '',
        currentOperand: evaluate(state),
      };
    default:
      return state;
  }
};

const evaluate = (state: State) => {
  const prev = parseFloat(state.previousOperand);
  const current = parseFloat(state.currentOperand);
  if (isNaN(prev) || isNaN(current)) {
    return '';
  }
  let computation: number = 0;
  switch (state.operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '÷':
      computation = prev / current;
      break;
    case 'x':
      computation = prev * current;
      break;
  }
  return computation.toString();
};

const store = createStore(reducer, initialState);

export { store, ACTIONS };
