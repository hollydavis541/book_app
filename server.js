'use strict';

// Application Dependencies
const express = require('express');
const superagent = require('superagent');
const pg = require('pg');

// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;

//Configure Database
const client = new pg.Client(process.env.DATABASE_URL);
client.on('err', err => console.error(err));

// Application Middleware
app.use(express.urlencoded({extended:true}));
app.use('/public', express.static('public'));

// Set the view engine for server-side templating
app.set('view engine', 'ejs');

// API Routes
// Renders the search form
app.get('/', newSearch);
app.get('/hello', getHello)

// Creates a new search to the Google Books API
app.post('/searches', createSearch);

// Catch-all
app.get('*', (request, response) => response.status(404).send('This route does not exist'));

// HELPER FUNCTIONS
// Only show part of this to get students started
function Book(info) {
  const placeholderImage = 'https://i.imgur.com/J5LVHEL.jpg';
  // convert http to https
  let httpRegex = /^(http:\/\/)/g

  this.title = info.title || 'No title available'
  this.author = info.authors? info.authors[0]: 'No author available'
  this.isbn = info.industryIdentifiers? info.industryIdentifiers[0].identifier: 'No ISBN Number'
  this.image_url = info.imageLinks? info.imageLinks.smallThumbnail.replace(httpRegex, 'https://'): placeholderImage
  this.description = info.description? info.description: 'No description'
  this.id = info.industryIdentifiers? info.industryIdentifiers[0].identifier: ''
}

// Note that .ejs file extension is not required
function newSearch(request, response) {
  response.render('pages/index');
}

function getHello(request, response) {
  response.render('pages/index');
}

// No API key required
// Console.log request.body and request.body.search
function createSearch(request, response) {
  let url = 'https://www.googleapis.com/books/v1/volumes?q=';

  // console.log(request.body);
  // console.log(request.body.search);

  if (request.body.search[1] === 'title') { url += `+intitle:${request.body.search[0]}`; }
  if (request.body.search[1] === 'author') { url += `+inauthor:${request.body.search[0]}`; }

  superagent.get(url)
    .then(apiResponse => apiResponse.body.items.map(bookResult => new Book(bookResult.volumeInfo)))
    .then(results => response.render('pages/searches/show', {searchResults: results}))
    .catch(err => handleError(err, response));
}

function handleError(error, response) {
  response.render('pages/error', {error: error})
}

// Make sure the server is listening for requests
client.connect()
  .then( ()=> {
    app.listen(PORT, ()=> {
      console.log('server and db are up, listening on port ', PORT);
    });
  });

