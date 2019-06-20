import React from 'react';

 class NewFriend extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       friendToAdd: {
         name: '',
         age: null,
         email: ''
       }
     };
   }

   handleChange = event => {
     this.setState({
       friendToAdd: {
         ...this.state.friendToAdd,
         [event.target.name]: event.target.value
       }
     });
   };

   postMessage = event => {
     event.preventDefault();
     this.props.postMessage(this.state.friendToAdd);
   };

  render() { 
    return (
      <div>
        <h4>Enter the deets of your new friend here</h4>
        <form onSubmit={this.postMessage}>
          <input 
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
            value={this.state.friendToAdd.name}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={this.handleChange}
            value={this.state.friendToAdd.age}
          />
          <input 
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.friendToAdd.email}
          />
          <button 
            type="submit">
            Add New Friend
          </button>
        </form>
      </div>
    );
  }
}


export default NewFriend;