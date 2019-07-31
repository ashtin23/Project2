const express = require("express");
const parser = require("body-parser");
const axios = require("axios");
const url = "https://trackapi.nutritionix.com/v2/search/instant";
const config = {
  headers: [
    { "x-app-id": "9792d5a4" },
    { "x-app-key": "d056d53904eba284a1b0873e7fc8276c"},
    { "x-remote-user-id": "ashtin23" }
  ]
};
const app = express();

app.use(parser.json());

app.get("/", (req, res) => {
    res.send("Welcome to project 2");
});

// axios.get("https://trackapi.nutritionix.com/v2/search/instant", config);

// axios.get("https://trackapi.nutritionix.com/v2/search/instant" + ashtin23)
//   .then(function(response){
//     console.log(response.data); // ex.: { user: 'Your User'}
//     console.log(response.status); // ex.: 200
//   });

app.listen(3000, () => {
    console.log("app listening on port 3000")
});
