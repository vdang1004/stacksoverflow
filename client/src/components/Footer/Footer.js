import React from "react";
import "./Footer.css";

const Footer = () => (
<div id="wrapper" className="animate">
<footer className="page-footer font-small blue pt-4">
  <div className="container-fluid text-center text-md-left"> 
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="brand">STACK$overflo</h5>
          
        </div>
        <hr className="clearfix w-100 d-md-none pb-3"/>
        <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">HOME</a>
              </li>
              <li>
                <a href="#!">Rap Sheet</a>
              </li>
              <li>
                <a href="#!">Piggy Bank</a>
              </li>
              <li>
                <a href="#!">Good Karma</a>
              </li>
            </ul>
        </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase"> <br></br></h5>
            <ul className="list-unstyled">
              <li>
                <a href="/getsmarterpage">Get Smarter</a>
              </li>
              <li>
                <a href="#!">Debt Collector</a>
              </li>
              
            </ul>
          </div>
      </div>
    </div>
    
    <div className="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="/"> STACK$overflo</a>
    </div>
  </footer>
</div>
);

export default Footer;
