const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const chefs = require("./data/chefs.json");

const recipes = require("./data/recipes.json");

app.use(cors());

app.get("/", (req, res) => {
    res.send("Chef Recipe Hunter Server is Running");
})


app.get("/chefs", (req, res) => {
    res.send(chefs)
})

app.get("/recipes", (req, res) => {
    res.send(recipes)
})

app.get("/recipes/:id", (req, res) => {
    const id = req.params.id;
    const selectedRecipes = recipes.find(recipe => recipe.id == id);
    res.send(selectedRecipes);
    console.log(id)
})


app.listen(port, () => {
    console.log(`Chef recipe hunter server is running on port: ${port}`)
})