import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";


class LoginPage extends Component {
  state = {
    user: '',
    savedUsers: [],
    password: "",
    savedPassword: "",
  };

 

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Login Page</h1>
            </Jumbotron>
            
            <Col size="md-3">
              
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginPage;
