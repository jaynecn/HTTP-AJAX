import React from 'react';

 class NewFriend extends React.Component {
   constructor() {
     super();
     this.state = {
       friendToAdd: {
         name: '',
         age: null,
         email: ''
       }
     };
   }

  render() { 
    return (
      <div>
        <form onSubmit={}>
          <input value={}
            onChange={}
            placeholder="Name">
          </input>
          <input value={}
            onChange={}
            placeholder="Age">
          </input>
          <input value={}
            onChange={}
            placeholder="Email">
          </input>
          <button onClick=
        {}>Add New Friend</button>
        </form>
      </div>
    )
  }
}


export default NewFriend;