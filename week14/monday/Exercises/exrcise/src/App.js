import './App.css';

function App() {
  // const myElement = <h1>I Love JSX!</h1>;
  // const sum = 5 + 5 
  // const listItems = <ul>
  //   <li>Apples</li>
  //   <li>Bananas</li>
  //   <li>Cherries</li>
  // </ul>
  // const input = <input></input>
  const name = 'John'
  const age = 12


  return (
    <div className="App">
      {/* <h1>hello world!</h1> */}
      {/* {myElement} */}
      {/* <h1>I do not use JSX</h1> */}
      {/* <h1>React is {sum} times better with JSX</h1> */}
      {/* <h3>{listItems}</h3> */}
      {/* Exercise-6 */}
      {/* <h1>I am a header</h1>
      <h1>I am a header too</h1> */}
      {/* Exercise-7 */}
      {/* {input} */}
      {/* Exercise-7 */}
      {`${name} is ${age} years old`}




    </div>
  );
}

export default App;
