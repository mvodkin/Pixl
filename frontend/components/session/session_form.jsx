import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  signupForm() {
    return (
      
    )
  }

  render() {


    return(
      <form>
        <label>Username or email</label>
      </form>
    );
  }
}
