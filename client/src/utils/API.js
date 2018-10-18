import axios from "axios";

export default {

  // Gets saved articles
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  getArticles: function(searchTerm, startYear, endYear) {

    const authKey = "13fafaa91bdd42edb84e413761c855ba"; 
    
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchTerm;

    if(startYear) {
      queryURL = queryURL +  "&begin_date=" + startYear + "0101";
    };

    if(endYear) {
      queryURL = queryURL +  "&end_date=" + endYear + "0101";
    }

    return axios.get(queryURL);
  }
};
