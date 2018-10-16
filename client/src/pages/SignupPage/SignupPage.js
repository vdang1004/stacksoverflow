import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";


class SignupPage extends Component {
  state = {
    user: '',
    password: "",
  };

 

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Signup Page</h1>
            </Jumbotron>
            
            <Col size="md-3">
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignupPage;
