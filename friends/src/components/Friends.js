import React from 'react';
import {Route, Link} from 'react-router-dom';
import NewFriend from './NewFriend';

function Friends(props) {
  return(
    <div>
      <p>Here are my friends</p>
      {props.friends.map(friend => (
        <div>
          <h1><Link to={`/friends/${friend.id}`} key={friend.id}>{friend.name}</Link></h1>
        </div>
      ))}
      <Link to="/new-friend"><h2>Add New Friend</h2></Link>
      {/* <Route exact path="/new-friend" component={NewFriend} /> */}
      <Route 
        exact path="/new-friend" 
        render={props => <NewFriend {...props} friends={this.state.friends} /> } 
        />
    </div>
  );
}

export default Friends;