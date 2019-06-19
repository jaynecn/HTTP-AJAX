import React from 'react';
import {Link} from 'react-router-dom';

function Friends(props) {
  return(
    <div>
      <p>Here are my friends</p>
      {props.friends.map(friend => (
        <div>
          <h1><Link to={`/friends/${friend.id}`} key={friend.id}>{friend.name}</Link></h1>
        </div>
      ))}
    </div>
  );
}

export default Friends;