const express = require('express');
const morgan = require('morgan');

//express app
const app = express();

//Register view engine
app.set('view engine', 'ejs');

//listen for requsets
app.listen(4000);

// app.use((req, res, next) => {
//   console.log("New request made");
//   console.log("Host: ", req.hostname);
//   console.log("Path: ", req.path);
//   console.log("Method: ", req.method);
//   next();
// });

app.use(express.static('public')); //middleware for img style
app.use(morgan('tiny')); //middleware

// app.use((req, res, next) => {
//   console.log("In the next middleware");
//   next();
// });

app.get('/', (req, res) => {
  const blogs = [
    {
      title: 'Yoshi finds eggs',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Mario finds stars',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'How to defeat bowser',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
  ];
  res.render('index', { title: 'Home', blogs: blogs });
});

// app.use((req, res, next) => {
//   console.log("In the next middleware");
//   next();
// });

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// New Blog post
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new Blog' });
});

//404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
