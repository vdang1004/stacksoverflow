import React, { Component } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import API from "../../utils/API";


class LoginPage extends Component {
  state = {
    user: '',
    email: '',
    //password: '',
    savedLogins: []
  };

  componentDidMount = () => {

    API.getLogins()
      .then(res => {
        console.log('Login Data: ', res.data);
        this.setState(
          { 
            savedLogins: res.data 
          }    
        )
        })
      .catch(err => console.log(err));    
  }
  
  handleInputChange = event => {
    const name = event.target.name;
    const value  = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault(); //stop the browser default refreshing event

    const user = this.state.user;
    //const email = this.state.email;
    const password = this.state.password;

    console.log('User on Submit: ', user);
    console.log('Password on Submit: ', password);
    console.log('Saved Login State: ', this.state.savedLogins);

    this.state.savedLogins.map((saveduser) => (
      this.state.user === saveduser.user && this.state.password === saveduser.password ? (
        window.location.replace('/homepage')
      ):(console.log('no match'))) 
    )
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
        <input type='text' onChange={this.handleInputChange} name='user' className="text animated slideInLeft" placeholder="Username"></input><br></br>
        <input type='text' onChange={this.handleInputChange} name='password' className="text animated slideInRight" placeholder="Password"></input><br></br>
        <button onClick={this.handleSubmit} className="btn login animated fadeInUp">Login</button><br></br>
        <div className="sign title animated fadeInDown">Not a Member?</div>
      </center>
    </div>
    <center> <div className="signup title animated fadeInUp"> <Link to="/signuppage">Sign Up Here</Link></div></center>
    
    </div>
    
      
    );
  }
}

export default LoginPage;