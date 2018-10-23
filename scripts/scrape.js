// scrape script
// =============


var axios = require("axios");
var cheerio = require("cheerio");

// This function will scrape the Wisebread website
var scrape = function() {
  

  return axios.get("https://www.wisebread.com/topic/personal-finance").then(function(res) {
    var $ = cheerio.load(res.data);
    // Make an empty array to save our article info
    var articles = [];
    // Now, find and loop through each element that has the "details" class
    $("div.details").each(function(i, element) {
      
      var head = $(element).find("a").text().trim();
    
      var url1 = $(element).find("a").attr("href");
      var url = "https://www.wisebread.com" + url1 
      
      if (head && url) {

        // Initialize an object we will push to the articles array

        var dataToAdd = {
          headline: head,
          url: url
          
        };
        articles.push(dataToAdd);
      }
      
    });
    //console.log(articles);
    return articles;
    
  });
};
// Export the function, so other files in our backend can use it
module.exports = scrape;
