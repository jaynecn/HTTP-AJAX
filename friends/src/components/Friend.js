import React from 'react';

function Friend(props) {
  const id = props.match.params.id;
  const friend = props.friends.find(friend => `${friend.id}` === id);
  
  return (
    <div>
      <h1>{friend.name}</h1>
      <h2>Age: {friend.age}</h2>
      <h3>Email: {friend.email}</h3>
    </div>
  );
}

export default Friend;