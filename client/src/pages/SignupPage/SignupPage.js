import React, { Component } from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";
// import Jumbotron from "../../components/Jumbotron";
// import { Col, Row, Container } from "../../components/Grid";


class SignupPage extends Component {
  state = {
    user: '',
    savedUsers: [],
    password: "",
    savedPassword: "",
  };

  render() {
    
    return (
      
    <div>
      <center>
        <h1 className="title animated fadeInDown">STACK$overflo</h1>
        <input className="text animated slideInLeft" type="text" placeholder="Username" name="" ></input><br></br>
        <input className="text animated slideInRight" type="text" placeholder="Email" name="" ></input><br></br>
        <input className="text animated slideInLeft" type="password" placeholder="Password" name=""></input><br></br>
        <button input className="btn login animated fadeInUp" type="Button" name="" button onClick="">Sign Up</button><br></br>
        <p>Already a Member?</p>
        <Link className= "linkToLogin" to="/"> ← back to Login</Link>
      </center>
    </div>
      
    );
  }
}

export default SignupPage;
