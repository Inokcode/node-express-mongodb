const express = require("express");

//express app
const app = express();

//Register view engine
//ajs auto matically lookinto views folder if not u have to tell where to watch
//app.set('views','myviews');
// app.set("view engine", "ejs");

//listen for requsets
app.listen(4000);

app.get("/", (req, res) => {
  // res.send("<p>Home page</p>");
  res.sendFile("./views/index.html", { root: __dirname });
});
// console.log({ __dirname });
// console.log({ __filename });
app.get("/about", (req, res) => {
  // res.send('<p>About page</p>');
  res.sendFile("./views/about.html", { root: __dirname });
});

//Redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404 page
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
