//Do or die Jarvise!
import React from 'react';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth.js'
class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

   handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

 handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/bubbles');
      })
      .catch(err => console.log(err.response));
  };

   // dustin had, res.data.payload rather than token.
  // if we were to make this into redux, it would be called as this.props.login
  // rathen than this.login

   render() {
    return (
      <div>
       <h1>Welcome to the Bubble App!</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Let's Rock!!!</button>
        </form>
      </div>
    );
  }
}

 export default Login;