# Restaurant Search - A short project for the JET Early Careers Interview process

## Overview

The goal of this project is to display restaurant data when a user inputs a postcode.

## Built With

- JavaScript
- HTML
- Bootstrap (for styling and responsive layout)

I chose to build this project using Javascript and HTML. I'm more experienced in Ruby on Rails and I initially wanted to use Rails to build the app accordingly, but felt that using a more popular framework that felt more appopriate for the assigment at hand was more practical. Using a different framework came with some lessons which are outlined further in the Notes section at the end.

Per the assigment instructions, we're only concerned with the following pieces of data from the endpoints response:

- Name
- Cuisines
- Rating - as a number
- Address

## How to Build and Run the Project

1. Clone the repository:
   `git clone https://github.com/rcopra/JET-Assessment.git`
2. Navigate to the project directory:
   `cd JET-Assessment`
3. Install the necessary Node.js dependencies:
   `npm install`
4. Start the server:
   `npm start`
5. Once the server is running, open your web browser and go to [http://localhost:3000](http://localhost:3000) (or whichever port you've configured) to view the application.

## Assumptions

- The application assumes the restaurant data endpoint is CORS enabled. I came to this assumption after trying to test the application, and having CORS errors thrown in the Developer console in Firefox. I wasn't sure how to tackle this issue at first as I haven't had experience dealing with CORS before. However, the [Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) contained some helpful information and a link to a Stack Overflow page, where I found some solutions for the error. I found that using a proxy through [Axios](https://github.com/axios/axios) were the solutions I used to set up a development environment.

## Potential Improvements

To be added

## Notes

To be added
