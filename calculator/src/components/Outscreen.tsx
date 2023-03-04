import { State } from '../types';
import { useSelector } from 'react-redux';

export default function Outscreen() {
  const outScreen = useSelector((state: State) => state.outScreen);

  return (
    <div>
      <input
        readOnly
        value={outScreen}
        type="text"
        className="w-full bg-black text-white text-right text-2xl outline-none"
      />
    </div>
  );
}
