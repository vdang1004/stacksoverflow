import React from "react";
import "./GetSmarterLinks.css";
import { Col, Row } from "../../components/Grid";


const GetSmarterLinks = props => (

  <Col size="md-12 sm-12">
    <Row>
      <Col size="md-4">
      </Col>
      <Col size="md-4">
        <hr className="hrSmall"></hr>
        <br></br>
      </Col>
      <Col size="md-4">
      </Col>
    </Row>
    <Row>
      <Col size="md-4">
      </Col>
      <Col size="md-4">
        <h3 className="recLinks" style={{color: "#1ABC9C"}}>Recommended Sites</h3>
        <br></br>
      </Col>
      <Col size="md-4">
      </Col>
    </Row>
    <Row>
      <Col size="md-4">
      <a href="https://www.thepennyhoarder.com/" target="_blank"><img src="/images/penny.png"/></a>
      </Col>
      <Col size="md-4">
      <a href="https://www.thebalance.com/" target="_blank"><img src="/images/balance.png"/></a>
      </Col>
      <Col size="md-4">
      <a href="https://www.wisebread.com/" target="_blank"><img src="/images/WiseBread.png"/></a>
      </Col>
    </Row>
  </Col>
)

export default GetSmarterLinks;
