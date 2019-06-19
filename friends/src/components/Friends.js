import React from 'react';

function Friends(props) {
  return(
    <div>
      <p>Here are my friends:</p>
      {props.friends.map(friend => (
        <div>
          <h1 key={friend.id}>{friend.name}</h1>
          <h2>Age: {friend.age}</h2>
          <h3>Email: {friend.email}</h3>
        </div>
      ))}
      
    </div>
  );
}

export default Friends;