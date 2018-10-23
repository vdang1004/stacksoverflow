import React, { Component } from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class SignupPage extends Component {
  state = {
    user: '',
    email: '',
    password: '',
    savedInfo: []
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value  = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault(); //stop the browser default refreshing event

    const user = this.state.user;
    const email = this.state.email;
    const password = this.state.password;

    this.saveLogin();    

    console.log('User on Submit: ', user);
    console.log('Email on Submit: ', email);
    console.log('Password on Submit: ', password);
    console.log(this.state);
  };

  saveLogin = () => {
    API.signUp({
      user: this.state.user,
      password: this.state.password
    })
      .then()
      .catch(err => console.log(err));
  };


  render() {
    
    return (

      <div className="mainDiv">
        <div id="block_container">
          <div id="bloc2" className="p animated bounceInUp" style={{color: "#1ABC9C"}}>$TACKS             </div>
          <div id="bloc1" className="h1 animated bounceInDown" style={{color: "gray"}}><strong> overflow </strong></div>
        </div>
        <div>
            <center>
              <input type='text' onChange={this.handleInputChange} name='user' className="text animated slideInLeft fa-user" placeholder="Username"></input><br></br>
              <input type='email' onChange={this.handleInputChange} name='email' className="text animated slideInRight" placeholder="Email"></input><br></br>
              <input type='text' onChange={this.handleInputChange} name='password' className="text animated slideInLeft" placeholder="Password"></input><br></br>
              <button onClick={this.handleSubmit} className="btn login animated fadeInUp">Sign Up</button><br></br>
              <div className="sign title animated fadeInDown">Already a Member?</div>
            </center>
        </div>
          <center> <div className="signup linkToLogin animated fadeInUp"> <Link to="/">← back to Login</Link></div></center>
      </div>    
    );
  }
}

export default SignupPage;