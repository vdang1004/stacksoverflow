import React, { Component } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
// import { Col, Row, Container } from "../../components/Grid";


class LoginPage extends Component {
  state = {
    user: '',
    savedUsers: [],
    password: "",
    savedPassword: "",
  };

  render() {
    
    return (
      
    <div className="mainDiv">
      <div >
      <center>
        <h1 className="title animated fadeInDown">STACK$overflo</h1>
        <input className="text animated slideInLeft fa-user" type="text" placeholder="Username" name="" ></input><br></br>
        <input className="text animated slideInRight" type="password" placeholder="Password" name=""></input><br></br>
        <button input className="btn login animated fadeInUp" type="Button" name="" value="Login" button onClick="move()">Login</button><br></br>
        <p>Not a Member?</p>
        <Link to="/signuppage">Sign Up</Link>
      </center>
    </div>
    <Footer/>
    </div>
      
    );
  }
}

export default LoginPage;
