import React, { Component } from "react";
import "./goodKarma.css";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/Jumbotron";



class goodKarma extends Component {
  state = {};

  render() {
    
    return (
      
    <div>
        <Nav></Nav>
        <Jumbotron>
            <h1>
                Good Karma
            </h1>

            <h4>
                "You get what you give"
            </h4>
        </Jumbotron>
    

      <div className="menu animated fadeInUp">
        <a href="https://www.bgca.org/"><img className="img-image animated fadeInDown" src="/images/BNG1.png" alt="Boys and Girls Club"/></a>


        <a href="https://www.habitat.org/"><img className="img-image animated fadeInUp" src="/images/h4h.png" alt="Habitat for Humanity"/></a>
        
        
        <a href="http://www.ymca.net/"><img className="img-image animated fadeInDown" src="/images/ymca.png" alt="YMCA"/></a>
        
        
        <a href="https://www.stjude.org/"><img className="img-image animated fadeInUp" src="/images/stjude.png" alt="St. Jude"/></a>

        <a href="https://www.woundedwarriorproject.org/"><img className="img-image animated fadeInUp" src="/images/ww.png" alt="Wounded Warrior"/></a>
        
        
      </div>
    <Footer></Footer>
    </div>
      
    );
  }
}

export default goodKarma;