import React from 'react';
import {Route, Link} from 'react-router-dom';

function Friend(props) {
  // const id = props.match.params.id;
  const friend = props.friends.find(friend => friend.id.toString() === props.match.params.id);

  return (
    <div>
      <h1>{friend.name}</h1>
      <h2>Age: {friend.age}</h2>
      <h3>Email: {friend.email}</h3>
    </div>
  );
}

export default Friend;