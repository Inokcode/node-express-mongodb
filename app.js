const express = require("express");

//express app
const app = express();

//Register view engine
//ejs auto matically lookinto views folder if not u have to tell where to watch
//app.set('views','myviews');
app.set("view engine", "ejs");

//listen for requsets
app.listen(4000);

app.get("/", (req, res) => {
  // res.send("<p>Home page</p>");
  // res.sendFile("./views/index.html", { root: __dirname });
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs: blogs });
});
// console.log({ __dirname });
// console.log({ __filename });
app.get("/about", (req, res) => {
  // res.send('<p>About page</p>');
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

//Redirects
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

// New Blog post
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});

//404 page
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
