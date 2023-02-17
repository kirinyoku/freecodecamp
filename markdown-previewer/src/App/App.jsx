import Editor from '../components/Editor/Editor';
import Previewer from '../components/Previewer/Previewer';
import { useState } from 'react';
import './App.scss';

function App() {

  const [input, setInput] = useState('');

  const inputHandler = (event) => {
    setInput(event.target.value);
  }

  return (
    <main className="app" aria-label='application'>
      <Editor input={input} inputHandler={inputHandler} />
      <Previewer input={input} />
    </main>
  );
}

export default App;
