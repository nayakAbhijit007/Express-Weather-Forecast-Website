const express = require("express");
const path= require("path");
const app = express();
const port = process.env.PORT || 8000 ;
//public static path
const static_path= (path.join(__dirname, "../public"))

//use of handlebars in website for dynamic content
app.set('view engine', 'hbs');
app.use(express.static(static_path));

// routing of the page
app.get("/", (req,res)=>{
    res.render("index")
});

app.get("/weather", (req,res)=>{
    res.render("weather")
});
app.get("/about", (req,res)=>{
    res.render("about")
});

app.get("*", (req,res)=>{
    res.render("404error")
})

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`)
});