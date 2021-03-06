const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const { result } = require('lodash');
const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();

//connect to mongoDB
const dbURI =
  'mongodb+srv://AdminInok:reginold@projectonecluster.ut44a.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  // .then((result) => console.log('connected to db'))
  .then((result) => app.listen(4000))
  .catch((err) => console.log(err));

//Register view engine
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

//mongoose and mongo sandbox routes
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "GBU ALL",
//     snippet: "God bless you!",
//     body: "S.T Anthony please pray for us",
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/single-blog", (req, res) => {
//   Blog.findById("60cf6aaed0d3013be01c31f8")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// routs
app.get('/', (req, res) => {
  // const blogs = [
  //   {
  //     title: "Yoshi finds eggs",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "Mario finds stars",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "How to defeat bowser",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  // ];
  // res.render("index", { title: "Home", blogs: blogs });
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

//blog routes
app.use('/blogs', blogRoutes);

//404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
