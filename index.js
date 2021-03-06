const express = require("express");
const parser = require("body-parser");
// const fs = require("fs");
var unirest = require("unirest");
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/restaurant");
});

var req = unirest(
  "GET",
  "https://us-restaurant-menus.p.rapidapi.com/restaurants/search/geo"
);

req.query({
  page: "1",
  lon: "-73.992378",
  lat: "40.68919",
  distance: "1"
});

req.headers({
  "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
  "x-rapidapi-key": "dac85aad16mshec8878695ddf685p19ab7djsn15aac488c9a6"
});

req.end(function(res) {
  if (res.error) throw new Error(res.error);
});

app.use("/restaurant/", require("./routes/restaurant"));
app.use("/cuisine/", require("./routes/cuisine"));

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

// mongodb+srv://ashtin23:buckeye92@cluster0-iqzmf.mongodb.net/test?retryWrites=true&w=majority