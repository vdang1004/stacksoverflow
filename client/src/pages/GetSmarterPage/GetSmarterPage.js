import React, { Component } from "react";
import "./GetSmarterPage.css";
import Nav from "../../components/Nav";
import Results from "../../components/Results";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";

class GetSmarterPage extends Component {
  state = {
    articles: [],
    savedArticles: [],
    title: "",
    startYear: "",
    endYear: ""
  };

  loadArticles = (searchTerm, startYear, endYear) => {
    API.getArticles(searchTerm, startYear, endYear)
      .then(res =>
        this.setState(
          { 
            articles: res.data.response.docs, 
            title: "", 
            startYear: "", 
            endYear: "" })   
        )
      .catch(err => console.log(err));
  };

  saveArticle = obj => {
    API.saveArticle(obj)
      .then()
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) 
      this.loadArticles(this.state.title, this.state.startYear, this.state.endYear)  
  };

  render() {
    return (
      <div className="main-container">
      <Container>
        <Nav/>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Get Smarter</h1>
              
            </Jumbotron>
          </Col>
        </Row>
        <Row>
        <Col size="md-12">
            <Results 
            articles={this.state.articles}
            saveArticle={this.saveArticle}
            />
          </Col>
        </Row>
      </Container>
      </div>
    );
  }

}

export default GetSmarterPage;
