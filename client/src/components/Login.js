//Do or die Jarvise!


import React from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const[user, setUser]= useState({username: '', password: ''})
    
    const handleChange = event => {
        setUser({
            ...user, 
            [event.target.name]: event.target.value
        })
    }
    const handleLogin = event => {
      event.preventDefault()
      axios.post('http://localhost:5000/api/login', user)
      .then(response => 
          localStorage.setItem('token', response.data.payload),
              //console.log(response.data.payload)
              props.history.push('/friendslist')
      )
      .catch(error => console.log('error from login', error.response))
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={handleLogin}>
            <label>UserName</label>
            <input
            type = 'text'
            name= 'username'
            // value = {user.username}
            onChange={event => handleChange(event)}
            />
            <label>Password</label>
            <input
            type = 'password'
            name = 'password'
            // value = {user.password}
            onChange = {event => handleChange(event)}
            />
            <button>Submit</button>
        </form>
    </>
  );
};

export default Login;
