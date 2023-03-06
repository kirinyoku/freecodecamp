import { State } from '../types';
import { useSelector } from 'react-redux';

export default function CurrentOperand() {
  const currentOperand = useSelector((state: State) => state.currentOperand);

  return (
    <div>
      <input
        readOnly
        value={currentOperand}
        type="text"
        className="w-full bg-black text-white text-right text-2xl leading-none outline-none"
      />
    </div>
  );
}
