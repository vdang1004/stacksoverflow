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

  getArticles: function() {

    const authKey = "13fafaa91bdd42edb84e413761c855ba"; 
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + "manage personal finances";
    return axios.get(queryURL);
  },


  getHeadlines: function() {
    return axios.get("/api/headlines");
  },

  getLogins: function() {
    return axios.get("/api/logins");
  },

  signUp: function(loginData) {
    return axios.post("/api/logins", loginData);
  }

};
