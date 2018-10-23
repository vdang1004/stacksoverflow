import React, { Component } from "react";
import axios from 'axios';
import "./GetSmarterPage.css";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ScrapedResults from "../../components/ScrapedResults";
import GetSmarterContent from "../../components/GetSmarterContent";
import Results from "../../components/Results";
import Saved from "../../components/Saved";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import GetSmarterLinks from "../../components/GetSmarterLinks";



class GetSmarterPage extends Component {
  state = {
    headlines: [],
    articles: [],
    savedArticles: [],
    title: "",
  };

  componentDidMount = () => {
    
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

    API.getHeadlines()
      .then(res => {
        console.log('headline Data: ', res.data);
        this.setState(
          { 
            headlines: res.data 
          }    
        )
        })
      .catch(err => console.log(err));

    this.loadSavedArticles();

    
  }

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
            <GetSmarterContent/>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <ScrapedResults
            headlines={this.state.headlines}
            saveArticle={this.saveArticle}
            />
          </Col>
          <Col size="md-6">
            <Results 
            articles={this.state.articles}
            saveArticle={this.saveArticle}
            />
          </Col>
        </Row>
        <Row>
        <Col size="md-12">
        <br></br>
            <Saved 
              savedArticles={this.state.savedArticles}
              delete={this.handleDelete}
            />
          </Col>
        </Row>
        <Row>
        <Col size="md-12">
        <br></br>
            <GetSmarterLinks />
          </Col>
        </Row>
        <br></br>
      </Container>
      <hr></hr>
      <Footer/>
      <hr></hr>
      </div>
    );
  }

}

export default GetSmarterPage;
