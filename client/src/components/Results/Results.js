import React from "react";
import Jumbotron from "../../components/Jumbotron";
import SaveBtn from "../../components/SaveBtn";
import { Col } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

const Results = props => (

  <Col size="md-12 sm-12">
    <Jumbotron>
      <h1>Build Your Knowledge Base</h1>
    </Jumbotron>
    {props.articles.length ? (
      <List>
        {props.articles.map(article => (
          <ListItem key={article._id}>
            <a href={article.web_url} target="_blank">
              <strong>
                {article.headline.main}
              </strong>
            </a>
            <SaveBtn onClick={() => {
              props.saveArticle(
              {
                title: article.headline.main,
                url: article.web_url,
                externalID: article._id
              }
              );
              alert("Article Saved")
            }
          }>
            </SaveBtn>
          </ListItem>
        ))}
      </List>
    ) : (
      <h3>No Results to Display. Search for an Article.</h3>
    )}
  </Col>
)

export default Results;
