import { State } from '../types';
import { useSelector } from 'react-redux';

export default function Formula() {
  const formula = useSelector((state: State) => state.formula);

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
