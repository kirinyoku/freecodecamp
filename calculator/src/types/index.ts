export type Props = {
  state?: string;
  setState?: () => void;
  className?: string;
  children?: string | JSX.Element | JSX.Element[];
};

export type Action = {
  type: string;
  payload?: any;
};

export type State = {
  previousOperand: string;
  currentOpernad: string;
  operation: string;
  overwrite: boolean;
};
