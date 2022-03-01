import React from 'react';
import CardsList from './components/CardsList'
import SearchBox from './components/SearchBox'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchText : ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      this.setState({robots:data})
    })
    .catch(e => {
      console.log(e);
    })
  }

  handleChange = (e) => {
    const {searchText} = this.state;
    this.setState({searchText : e.target.value})
  }

  render() {
    const {robots , searchText} = this.state;
    console.log(searchText);
    return (
      <>
        <SearchBox onInputChange={this.handleChange}/>
        <CardsList robots = {robots} />
      </>
    );
  }
}

export default App;
