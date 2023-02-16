import { useState } from 'react';
import Editor from '../components/Editor/Editor';
import Previewer from '../components/Previewer/Previewer';
import './App.scss';

function App() {

  const [input, setInput] = useState('');

  const inputHandler = (event) => {
    setInput(event.target.value);
  }

  return (
    <div className="app">
      <Editor input={input} inputHandler={inputHandler} />
      <Previewer input={input} />
    </div>
  );
}

export default App;
