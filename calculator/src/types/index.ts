export type Props = {
  state?: string;
  setState?: () => void;
  className?: string;
  children?: string | JSX.Element | JSX.Element[];
};

export type Action = {
  type: string;
  payload: string;
};

export type State = {
  previousOperand: string;
  currentOperand: string;
  operation: string;
  overwrite: boolean;
};
