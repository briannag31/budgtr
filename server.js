const express = require("express")
const app = express()
const PORT = 3001
const lineItem = require("./models/budget.js");
const morgan = require("morgan")
const methodOverride = require("method-override")

app.use(express.urlencoded({extended: false}));
app.use(morgan("tiny"))
app.use(methodOverride("_method")) 
app.use("/static", express.static("public"))


//Index
app.get("/budget/", (req,res)=>{
    res.render("index.ejs", {allLineItems: lineItem})
})
  //New
app.get("/budget/new", (req,res)=>{
    res.render("new.ejs")
 })
 
 //Delete

 //Updates
 app.get("/budget/:id/edit", (req,res)=>{
    res.render("edit.ejs",{ 
        item: lineItem[req.params.id],
  index:req.params.id
  })
  })

 //Create
 app.post('/budget', (req, res) => {
    lineItem.push(req.body);
    console.log(lineItem);
    res.redirect('/budget');
  });
 //Edit

 //Show
 app.get("/budget/:id", (req, res) => {
    res.render("show.ejs", { item: lineItem[req.params.id] });
  });

 app.post("/budget/", (req,res)=>{
    
 })






app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
})
