import React, { Component } from "react";
import "./HomePage.css";


class HomePage extends Component {
  state = {};

  render() {
    
    return (
      
    <div>
     <div className="title animated fadeInDown"><img className="imageLogo animated fadeInDown" src="/images/logo.png" alt="logo"/></div>

      <div className="menu animated fadeInUp">
        <a href="/rapsheetpage"><img className="img-image animated fadeInDown" src="/images/Rap.png" alt="Rap Sheet"/></a>
        <a href="/piggybankpage"><img className="img-image animated fadeInUp" src="/images/piggy.png" alt="Piggy Bank"/></a>
        <a href="/debtcollectorpage"><img className="img-image animated fadeInDown" src="/images/debt.png" alt="DebtCollect"/></a>
        <a href="/goodkarmapage"><img className="img-image animated fadeInUp" src="/images/karma.png" alt="Karma"/></a>
        <a href="/getsmarterpage"><img className="img-image animated fadeInDown" src="/images//GetSmarter.png" alt="Smart"/></a>
      </div>
    
    </div>
      
    );
  }
}

export default HomePage;