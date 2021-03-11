const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // console.log(JSON.parse(body))
    if (error) {
      callback("Error: system error", null);
    } else if (JSON.parse(body).length === 0) {
      callback("Error: input error", null);
    } else {
      const data = JSON.parse(body);
      let breedDescription = data[0].description;
      callback(null, breedDescription);
    }
  });
};

module.exports = { fetchBreedDescription };