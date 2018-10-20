import React, { Component } from "react";
import axios from 'axios';
import "./GetSmarterPage.css";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Results from "../../components/Results";
import Saved from "../../components/Saved";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";


class GetSmarterPage extends Component {
  state = {
    articles: [],
    savedArticles: [],
    title: "",
  };

  componentDidMount = () => {
    // axios({
    //   url:'https://jsonplaceholder.typicode.com/users',
    //   method: 'GET'
    // })
    // .then((response) => {
    //   console.log('Data: ', response.data);
    //   this.setState({users: response.data});
    // })
    // .catch(() => {
    //   alert('oops, there was an error');
    // });
    API.getArticles()
    .then(res => {
      console.log('article Data: ', res.data.response.docs);
      this.setState(
        { 
          articles: res.data.response.docs, 
          title: ""
        });     
    })
    .catch(err => console.log(err));

    this.loadSavedArticles();
  }

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
      this.loadSavedArticles();
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleDelete = id => {
    API.deleteArticle(id)
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
    this.loadSavedArticles();
  };

  loadSavedArticles = () => {
    API.getSavedArticles()
      .then(res =>
        this.setState(
          { 
            savedArticles: res.data 
          }    
        )
        )
      .catch(err => console.log(err));
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
        <Row>
        <Col size="md-12">
            <Saved 
              savedArticles={this.state.savedArticles}
              delete={this.handleDelete}
            />
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <Footer/>
      <hr></hr>
      </div>
    );
  }

}

export default GetSmarterPage;
