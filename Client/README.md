# Software Engineering Academy Coding Unattended Test

## How to run it
First we need to run `npm install` in **`Server`** and **`Client`** folders.

Secondly we have to run in the **`Client`** folder an `npm run dev` and in a **`Server`** folder we have to run
 `node app.js` command.

Lastly go to **`http://localhost:8080`** on a browser.
Server runs on port `3030`.

A `test.xml` folder is in the root folder.
##Client

I made the client using Vue.js with <a href=https://github.com/vuejs-templates/webpack>vue-webpack-boilerplate</a>.
 I choose VueJS because I thought it would be a good idea to improve my skills on it. I was also thinking about 
 using ReactJS in my client part,
but I wanted something different this time.
Using Vue.js in the client I used multiple components and set up `vue-router` to make the app more flexible and easier to 
understand and develop. It might not be crucial for an app this small, but still good if the app grows.

I used one of most popular linters, <a href="https://github.com/airbnb/javascript">Airbnb</a>, so my code is easier to keep consistent and more error-free.

For communication with server I used VueJS wrapper for <a href =https://github.com/axios/axios >Axios</a>
 
 ##Server
 I developed the server using <a href="https://nodejs.org/en/">NodeJs</a> and <a href="http://expressjs.com/">Express</a>. Server side of the app is pretty simple: it takes an XML document which is 
 uploaded via the client side, parses it using `xmldom` and lastly stores in a JSON file.
 
 When retrieving movies, they're filtered to get matching ones by mood supplied in a query parameter.
 
 In the server app there is only 1 
  `GET` and 1 `POST` action, the whole server uses less than 70 lines of code.
 
 ##Server possible improvements
 
 * I haven't written any unit tests
 * There is no real database, only a JSON file.
 * All images are  pre-uploaded in the system.
 * Could add a way to add new pictures and use something like <a href="https://github.com/lovell/sharp">Sharp</a> to process them.
 
 ##User experience
 For this project I tried to find movies suitable for category not just pick up randomly. Also to make user experience not 
 cluttered and easy as possible with bright colors so it would make user energized, and happy. For stickers I went
  for color therapy work and if user searches for sad, I'm targeting color to be energizing and uplifting, and so on.
  
 ##Web browser
 At the time of making this project I used Version **63.0.3239.132 (Official Build) (64-bit)** Google Chrome web browser.
