const request = require('request');
let catBreed = process.argv[2];



request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(body)
  if (error) {
    console.log(`Error:${error}`);
    return;
  } else if (JSON.parse(body)) {
    console.log('Error: No breed found');
  } else {
    const data = JSON.parse(body);
    let data0 = data[0];
    console.log(data0.description);
    console.log(typeof data);
  }
});