import React from "react";
import "./Nav.css";

const Nav = () => (
  <div id="wrapper" className="animate">
    <nav className="navbar header-top fixed-top navbar-expand-lg  navbar-dark bg-dark">
      <a className="navbar-brand" href="/homepage">STACK$overflow</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        {/* <ul className="navbar-nav animate side-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Side Menu Items</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
        </ul> */}
        <ul className="navbar-nav ml-md-auto d-md-flex">
          <li className="nav-item">
            <a className="nav-link" href="/homepage">Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/getsmarterpage">GetSmart</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/rapsheetpage">RapSheet</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/piggybankpage">Bank</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/goodkarmapage">Karma</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="debtcollectorpage">Debt</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
);

export default Nav;
