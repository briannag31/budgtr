const express = require("express")
const app = express()
const PORT = 3001
const lineItem = require("./models/budget.js");
const morgan = require("morgan")
const methodOverride = require("method-override")
let bankAcct = [];


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
 

 //Create
 app.post('/budget', (req, res) => {
    lineItem.push(req.body);
    res.redirect('/budget');
  });

 //Show
 app.get("/budget/:id", (req, res) => {
    res.render("show.ejs", { item: lineItem[req.params.id] });
  });

  //adds sum but couldnt figure out how to get it to add new amounts/connect to my index.ejs file
  
//   for (amount in lineItem){
//     currentBalance = (lineItem[amount].amount)
//     bankAcct.push(currentBalance)
//  }
// let sum = 0
//  for (let i = 0; i < bankAcct.length; i++) {
//     sum += bankAcct[i];
// }
// console.log(sum)

app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
})


