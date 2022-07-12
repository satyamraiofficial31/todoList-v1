const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
let items=[];
// set the view engine to ejs
app.set('view engine', 'ejs');
app.get("/",function(req,res){
  //const day=date.getDay();//to get day
  const day=date.getDate();//to get date

  res.render("index", {Kindofday:day, itemName:items});

});
app.get("/about",function(req,res){
  res.render("about");
});
app.get("/contact",function(req,res){
  res.render("contact");
});
app.post("/",function(req,res){
  let item = req.body.item;
  items.push(item);
  res.redirect("/");
})

app.listen(3000,function(){
  console.log("Server started on port 3000");
});
