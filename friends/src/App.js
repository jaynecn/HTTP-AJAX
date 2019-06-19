import React from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }


  fetchItemsWithAxios = () => {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data})
    })
    .catch(error => {
      console.log(error.message);
    })
  }

  componentDidMount() {
    this.fetchItemsWithAxios();
  }

  render() {
    return (
      <div className="App">
        <h1>Testing this works</h1>
      </div>
    )
  }




}

export default App;
