import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import {changePropOne , changePropTwo} from './redux/action'



class App extends React.Component{
  constructor() {
    super();
    this.state = {
      property_one : '123456',
      property_two : '7890123'
    }
  }
  // handleChange = (e) => {
  //   this.setState({property_one : e.target.value})
  // }
  whenClick = () => {
    this.setState({property_two : this.state.property_one})
  }
  render() {
    const {prop_one , prop_two , handleChange , whenClick} = this.props
    return (
      <div className="App">
        <h1>Simple Redux Example</h1>
        <h3>Property one: {prop_one}</h3>
        <h3>Property two: {prop_two}</h3>
        <input type='text' onChange={handleChange}/>
        <br/>
        <button onClick={() => whenClick()}>Click 1</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    prop_one : state.property_one,
    prop_two : state.property_two
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    handleChange : (e) => dispatch(changePropOne(e.target.value)),
    whenClick : () => dispatch(changePropTwo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
