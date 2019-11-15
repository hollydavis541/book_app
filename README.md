# Code 301 [Full Stack Book App](https://shielded-thicket-11289.herokuapp.com/)  

**Authors**: Holly Davis  
**Version**: 1.6.0
<!-- (increment the patch/fix version number if you make more commits past your first submission) -->

## Overview
This is a full stack book applicaiton that allows the user to search for books from the Google Books API, save books to their database and indicate a bookshelf, and update the book's information. See it in action [here](https://shielded-thicket-11289.herokuapp.com/).

<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

1. Fork this repository
2. Clone it to your computer
3. In your command line: $ touch .env
4. Add your port and database url to the .env file
5. Confirm that node is installed: $ node -v (if not installed, do so)
6. To start your server: $ nodemon
7. Deploy the application to heroku
8. Provision postgres on heroku and push your table to it
9. Add your port to the heroku configs (your postgres database URL will already have been automatically added)
10. Open your app on heroku to test functionality

## Architecture

This is a full stack application that uses express, dotenv, pg, superagent, ejs, and cors packages. The server also has a static public folder to hold the front end JavaScript and CSS.

<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->


## Change Log

11-12-2019 09:10 AM - file scaffold and initial index HTML and CSS working

11-12-2019 09:35 AM - updated index content to include search options

11-12-2019 02:45 PM - created Book constructor and added error handler function

11-13-2019 06:30 AM - updated show.ejs to include additional book information

11-13-2019 08:30 AM - required postgres and configured database

11-13-2019 09:00 AM - updated schema and pushed database to heroku

11-13-2019 09:45 AM - fixed image reference on show.ejs and drafted renderIndex function

11-13-2019 09:45 AM - fixed image reference on show.ejs and drafted renderIndex function

11-13-2019 11:45 AM - refactored to use starter code as base, added template to index, readded depdencies to starter code, redrafted getBooks function

11-13-2019 12:20 PM - added 2 sample table rows to database

11-14-2019 09:00 AM - getOneBook and getBookshelves functions created

11-14-2019 09:30 AM - book detail EJS structure created

11-14-2019 11:15 AM - moved search to new page, added saved books count to index, added view details button

11-15-2019 ______ AM - placeholder

11-15-2019 ______ AM - placeholder

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource.-->

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->


Number and name of feature: Feature #1 Setup  
Estimate of time needed to complete: 60 minutes  
Start time: 08:00 AM  
Finish time: 09:10 AM  
Actual time needed to complete: 70 minutes  

Number and name of feature: Feature #2 Search  
Estimate of time needed to complete: 20 minutes  
Start time: 09:30 AM  
Finish time: 09:40 AM  
Actual time needed to complete: 10 minutes  

Number and name of feature: Feature #3 Browse  
Estimate of time needed to complete: 30 minutes  
Start time: 02:00 PM  
Finish time: 02:30 PM  
Actual time needed to complete: 30 minutes  

Number and name of feature: Feature #4 Errors  
Estimate of time needed to complete: 15 minutes  
Start time: 02:30 PM  
Finish time: 02:40 PM  
Actual time needed to complete: 10 minutes  

Number and name of feature: Feature #5 Database  
Estimate of time needed to complete: 90 minutes  
Start time: 08:30 AM  
Finish time: 12:00 PM  
Actual time needed to complete: 3.5 hours (troubleshooting various issues)  

Number and name of feature: Feature #6 Details  
Estimate of time needed to complete: 90 minutes  
Start time: 08:30 AM  
Finish time: 12:30 PM  
Actual time needed to complete: 4 hours (troubleshooting various issues)  

Number and name of feature: Feature #7 Reveal  
Estimate of time needed to complete: 60 minutes  
Start time: ______ AM  
Finish time: ______ AM  
Actual time needed to complete: ______ AM  
