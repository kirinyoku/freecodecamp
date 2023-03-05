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
  currentOpernad: '',
  operation: '',
  overwrite: false,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ACTIONS.ADD_DIGITS:
      if (state.overwrite) {
        return {
          ...state,
          currentOpernad: action.payload,
          overwrite: false,
        };
      }
      if (action.payload === '0' && state.currentOpernad === '0') {
        return state;
      }
      if (action.payload === '.' && state.currentOpernad.includes('.')) {
        return state;
      }
      return {
        ...state,
        currentOpernad: `${state.currentOpernad ?? ''}${action.payload}`,
      };
    case ACTIONS.RESET:
      return {
        previousOperand: '',
        currentOpernad: '',
        operation: '',
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOpernad === '' && state.previousOperand === '') {
        return state;
      }
      if (state.previousOperand === '') {
        return {
          ...state,
          operation: action.payload,
          previousOperand: state.currentOpernad,
          currentOpernad: '',
        };
      }
      if (state.currentOpernad === '') {
        return {
          ...state,
          operation: action.payload,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: action.payload,
        currentOpernad: '',
      };
    case ACTIONS.EVALUATE:
      if (state.operation === '' || state.currentOpernad === '' || state.previousOperand === '') {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: '',
        operation: '',
        currentOpernad: evaluate(state),
      };
    default:
      return state;
  }
};

const evaluate = (state: State) => {
  const prev = parseFloat(state.previousOperand);
  const current = parseFloat(state.currentOpernad);
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

const store = createStore(reducer);

export { store, ACTIONS };
