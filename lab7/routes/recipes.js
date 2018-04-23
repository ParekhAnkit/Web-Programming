// JavaScript source code
const express = require('express');
const router = express.Router();
const data = require("../data");
const recipesData = data.recipes;

router.get("/", async function (req, res){

    try {
       let recipesList= await recipesData.getAllRecipes();
        res.json(recipesList);
    }

    catch(error){
        // Something went wrong with the server!
        res.sendStatus(500);
    }
});

router.get("/:id",async (req, res) =>{
    try{
        let recipe = await recipesData.getRecipeById(req.params.id);
        res.json(recipe);
    }
    catch(error)
    {
        res.status(404).json({ error: "Recipe not found" });
    }
});


router.post("/", async (req, res) => {
    
    const recipe = req.body;

    if (!recipe) {
        res.status(400).json({ error: "You must provide data to create a recipe" });
        return;
    }

    if (!recipe.title) {
        res.status(400).json({ error: "You must provide a title" });
        return;
    }

    if (!recipe.ingredients) {
        res.status(400).json({ error: "You must provide a ingredients" });
        return;
    }

    if (!recipe.steps) {
        res.status(400).json({ error: "You must provide a steps" });
        return;
    }
    try {
        const newRecipe = await recipesData.addRecipe(recipe.title, recipe.ingredients, recipe.steps);
        console.log(newRecipe);
        res.json(newRecipe);
        
            
        }
            catch (e) {
                res.status(500).json({ error: e });
        }
});

router.put("/:id", async (req, res) =>{
    try{
    let recipe = req.body;

    if (!recipe) {
        res.status(400).json({ error: "You must provide data to update a recipe" });
        return;
    }

    let getRecipe = await recipesData.getRecipeById(req.params.id);
    let updatedRecipe = await recipesData.updateRecipe(req.params.id, recipe)
          res.json(updatedRecipe);
      
    }
        catch (error) {

        console.log(error);
        res.sendStatus(500);

    }

});

router.delete("/:id", async (req, res)=>{
    try {

    
        let recipe = await recipesData.getRecipeById(req.params.id);
        let data = await recipesData.removeRecipe(req.params.id);
        res.sendStatus(200);
        return data;
    }
        catch(err) {
        console.log(err);
        res.status(404).json({ error: "Recipe not found" });
    }
});

module.exports = router;