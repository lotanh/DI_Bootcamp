import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter : 0,
      txt : ''
    }
    console.log('constructor');
  }

  changeName = () => {
    this.setState({name: 'Tal'})
  }
  // componentDidMount() {
  //   console.log('componentDidMount');
  // }

  plusOne = (value) => {
    let {counter} = this.state
    this.setState({counter : counter + value})
  }
  minusOne = () => {
    let {counter} = this.state
    this.setState({counter : counter - 1})
  }
  handleChange = (event) => {
    this.setState({txt : event.target.value})
  }
  render(){
    const {counter, txt} = this.state
    return (
      <div className="App">
        <header className="App-header">
          {counter}
          <button onClick={() => this.plusOne(5)}>Plus 1</button>
          <button onClick={this.minusOne}>Minus 1</button>
          <input type='text' onChange={this.handleChange}></input>
          <div>
            {txt}
          </div>
        </header>
      </div>
    );
  }
}


export default App;
