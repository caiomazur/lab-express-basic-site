const express = require("express");

const app = express();

app.use(express.static("public"))

app.get("/home", (request, response) => {
    console.log(__dirname)
    response.sendFile(__dirname + '/views/home.html');
}) 

app.get("/about", (request, response) => {
    console.log(__dirname)
    response.sendFile(__dirname + '/views/about.html');
}) 

app.get("/works", (request, response) => {
    console.log(__dirname)
    response.sendFile(__dirname + '/views/works.html');
}) 
app.get("/photo-gallery", (request, response) => {
    console.log(__dirname)
    response.sendFile(__dirname + '/views/photo-gallery.html');
}) 

app.listen(3000, () => console.log("Server running on port 3000"));
