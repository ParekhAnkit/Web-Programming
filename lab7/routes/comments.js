// JavaScript source code
const express = require('express');
const router = express.Router();
const data = require("../data");
const recipesData = data.recipes;

router.get("/recipe/:recipeId", async function (req, res) {
    try {

    const data = await recipesData.getRecipeById(req.params.recipeId); 
    const allComments = await recipesData.getAllCommentsByRecipeID(req.params.recipeId);
            
                res.json(allComments);
            }

    catch(error) {
        res.status(404).json({ error: "Recipe not found" });
    }
});


router.get("/:commentId", async function (req, res) {
    try {
        const comment = await recipesData.getCommentByCommentID(req.params.commentId);
        res.json(comment);
    }
    catch (error)  {
        res.status(404).json({ error: "Comments not found" });
    }
});

router.post("/:recipeId", async function (req, res) {
    try{
    let comment = req.body;

    if (!comment) {
        res.status(400).json({ error: "You must provide data to create a comment" });
        return;
    }

    if (!comment.poster) {
        res.status(400).json({ error: "You must provide a poster" });
        return;
    }

    if (!comment.comment) {
        res.status(400).json({ error: "You must provide a comment" });
        return;
    }

    const data = await recipesData.getRecipeById(req.params.recipeId);
      
    const newComment = await recipesData.addComment(req.params.recipeId, comment.poster, comment.comment);
            
    res.json(newComment);
             
    }
      catch(error) {
        res.status(404).json({ error: "Recipe not found" });
   }

});

router.put("/:recipeId/:commentId", async function (req, res) {
    try{
    let updateCommentObject = req.body;

    if (!updateCommentObject) {
        res.status(400).json({ error: "You must provide data to update a comment" });
        return;
    }

    let getComment = await recipesData.getRecipeById(req.params.recipeId);
    let data = await recipesData.getCommentByCommentID(String(req.params.commentId));
    let updatedComment = await recipesData.updateComment(req.params.recipeId, req.params.commentId, updateCommentObject);
                
                    res.json(updatedComment);
                }
     
     catch(error) {
        res.status(404).json({ error: "Recipe not found" });
    }

});

router.delete("/:id", async function (req, res) {
    try{
        let comment = await recipesData.getCommentByCommentID(req.params.id);
        res.sendStatus(200);
        return recipesData.deleteComment(req.params.id);
    
           /* .then(() => {
                res.sendStatus(200);
            }).catch(() => {
                res.sendStatus(500);
            });
        */
    }
    catch (err) {
        console.log(err);
        res.status(404).json({ error: "Recipe not found" });
    }
});

module.exports = router;