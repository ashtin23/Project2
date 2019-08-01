const express = require("express");
const parser = require("body-parser");
const fs = require("fs");
var unirest = require("unirest");

// fs.readFile("./file.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//   }
// });




var req = unirest("GET", "https://us-restaurant-menus.p.rapidapi.com/restaurants/search/geo");

req.query({
	"page": "1",
	"lon": "-73.992378",
	"lat": "40.68919",
	"distance": "1"
});

req.headers({
	"x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
	"x-rapidapi-key": "dac85aad16mshec8878695ddf685p19ab7djsn15aac488c9a6"
});


req.end(function (res) {
  if (res.error) throw new Error(res.error)
  
	fs.writeFile("./file2.json", JSON.stringify(res), err => {
    if(err) {
      console.error(err);
    }else {
      console.log(res)
    }
  });
});

// const reqJson = JSON.stringify(req);


const app = express();

app.use(parser.json());



app.listen(3000, () => {
    console.log("app listening on port 3000")
});
