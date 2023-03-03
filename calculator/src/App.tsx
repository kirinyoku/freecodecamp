import { useState } from "react";
import Display from "./components/Display";
import Numpad from "./components/Numpad";

export default function App() {

  const [state, setState] = useState('');

  return (
    <div className="App">
      <Display/>
      <Numpad/>
    </div>
  )
}
