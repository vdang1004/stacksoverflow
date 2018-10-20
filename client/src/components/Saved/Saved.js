import React from "react";
import DeleteBtn from "../../components/DeleteBtn";
import { Col } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Jumbotron from "../../components/Jumbotron";

const Saved = props => (
  <Col size="md-12 sm-12">
    <Jumbotron>
      <h1>Save to Read Later</h1>
    </Jumbotron>
    {props.savedArticles.length ? (
      <List>
        {props.savedArticles.map(article => (
          <ListItem key={article.externalID}>
            <a href={article.url} target="_blank">
              <strong>
                {article.title}
              </strong>
            </a>
            <DeleteBtn onClick={() => {
              props.delete(article.externalID);
            }
          }>
            </DeleteBtn>
          </ListItem>
        ))}
      </List>
    ) : (
      <h3>No Results to Display. Find & Save an Article.</h3>
    )}
  </Col>
)

export default Saved;
