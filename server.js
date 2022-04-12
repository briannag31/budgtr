const express = require("express")
const app = express()
const PORT = 3000
const budgetItems = require("./models/budget.js");
const morgan = require("morgan")
const methodOverride = require("method-override")

app.use(express.urlencoded({extended: false}));
app.use(morgan("tiny"))
app.use(methodOverride("_method")) 

app.get("/budgets", (req,res)=>{
    res.send("budgets")
})

app.get("/budgets/new", (req,res)=>{
    res.send("new")
 })
 
app.get("/budgets/:index", (req,res)=>{
    res.send("index number")
 })
 app.post("/budgets/", (req,res)=>{
    
 })






app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
})
