import { State } from '../types';
import { useSelector } from 'react-redux';

export default function Formula() {
  const previousOperand = useSelector((state: State) => state.previousOperand);
  const operation = useSelector((state: State) => state.operation);
  const formula = previousOperand + operation;

  return (
    <div>
      <input
        readOnly
        value={formula}
        type="text"
        className="w-full bg-black text-[#ecb939] text-right text-2xl leading-none outline-none"
      />
    </div>
  );
}
