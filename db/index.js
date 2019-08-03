const fs = require("fs");

fs.writeFile("./restaurant.json", JSON.stringify(res), err => {
    if (err) {
      console.error(err);
    } else {
      // console.log(res);
    }
  });