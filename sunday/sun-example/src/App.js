import { useState } from 'react';
import './App.css';
import Counter from './Counter'

function App() {
  const [counter , setCounter] = useState(0)

  const addOne = () => {
    setCounter(counter + 1)
  }
  const minusOne = () => {
    setCounter(counter - 1)
  }
  return (
    <div className="App">
      < Counter addOne= {addOne} minusOne= {minusOne} counter = {counter}/>
    </div>
  );
}

export default App;
