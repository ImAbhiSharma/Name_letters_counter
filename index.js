import express from "express";
import bodyParser from "body-parser";

const app = express();


app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req,res) => {
   const numLetters = req.body["fName"].length + req.body["lName"].length;
   console.log(numLetters);
   res.render("index.ejs", {numberofLetters: numLetters});

});

app.listen(3007, () => {
    console.log("server started at 3007");
})