import React from "react";
import Jumbotron from "../Jumbotron";
import SaveBtn from "../SaveBtn";
import { Col } from "../Grid";
import { List, ListItem } from "../List";

const ScrapedResults = props => (

  <Col size="md-12 sm-12">
    
    {props.headlines.length ? (
      <List>
        {props.headlines.map(headline => (
          <ListItem key={headline._id}>
            <a href={headline.url} target="_blank">
              <strong>
                {headline.headline}
              </strong>
            </a>
            <SaveBtn onClick={() => {
              props.saveArticle(
              {
                title: headline.headline,
                url: headline.url,
                externalID: headline._id
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
      <h3>No Results to Display.</h3>
    )}
  </Col>
)

export default ScrapedResults;
