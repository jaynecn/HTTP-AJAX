import React from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Friends from './components/Friends';
import Friend from './components/Friend';
import NewFriend from './components/NewFriend';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  postMessage = friend => {
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        console.log(res);
        this.setState({
          
        })

      })
  }


  fetchItemsWithAxios = () => {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data})
      console.log(response);
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
        <h1>PPPPPPSSSSSTTTT....</h1>
        <h4>Wanna know some info about my friends??</h4>
        <Link className="friends-link" to="/friends"><h3>Friends</h3></Link>
        <Route 
        exact path="/friends" 
        render={props => <Friends {...props} friends={this.state.friends} /> } 
        />
        <Route 
          path="/friends/:id" 
          render={(props) => <Friend friends={this.state.friends} {...props} />} 
        />
        <Route 
        exact path="/new-friend" 
        render={props => <NewFriend {...props} friends={this.state.friends} /> } 
        />
      </div>
    )
  }
}

export default App;
