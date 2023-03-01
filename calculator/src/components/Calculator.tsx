import Display from "./Display";
import Numpad from "./Numpad";

export default function Calculator() {
  return (
    <div className="Calculator">
      <Display />
      <Numpad />
    </div>
  )
}
