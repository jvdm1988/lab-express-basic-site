const express = require("express");

const app = express();

//                 npm install ejs --save
//                       |
app.set("view engine", "ejs");

//get static assets from the public/ folder
app.use(express.static("public"));


//ROUTE
//  is an address (url) that you can visit on this application


let visitCount = 0;
//localhost:3000/ aka the home page of this app.
//              |
//       --------
//       |
app.get("/", (request ,response, next) => {
 // anonymous function determines the code that is run
 // when you visit the address (url)

visitCount += 1;
console.log(visitCount + " people have viewed this site.");

 // when you visit this address, you see this content
 // send the browser the contents of "views/home.ejs"
 response.render("home.ejs");
});


// localhost:3000/about
//                  |
//          ---------
//          |
app.get("/about", (request, response, next) => {
  visitCount += 1;
  console.log(visitCount + " people have viewed this site.");
  // send the browser the contents of "views/about.ejs"
    response.render("about.ejs");
});

app.get("/contact", (request, response, next) => {
// send teh browser the contents of "views/contact-us-pls.ejs"
  response.render("contact.ejs");
});




//
app.listen(3000);
// // localhost: 3000
