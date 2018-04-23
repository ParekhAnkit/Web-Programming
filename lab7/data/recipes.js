// JavaScript source code
const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require('node-uuid');

let exportedMethods = {

    async getAllRecipes() {
        try {

            const recipeCollection = await recipes();
            const allRecipes = await recipeCollection.find({}).project({ _id: 1, title: 1 }).toArray();
            return allRecipes;

        }

        catch (ex) {
            throw ex;


        }


    },

    async getRecipeById(id) {
        try {
            if (!id) throw "You must provide an id to search for";
            const recipeCollection = await recipes();

            const recipe = await recipeCollection.findOne({ _id: id })
            if (!recipe) throw "Recipe not found";
            return recipe;
        }
        catch (ex) {

            throw ex;
        }


    },


    async addRecipe(title, ingredients, steps) {
        try {
            if (!title) throw "You must provide a Title for your recipe";

            if (!ingredients)
                throw "You must provide a ingredients";

            if (!steps)
                throw "You must provide steps"

            const recipeCollection = await recipes();
            const newRecipe = {
                _id: uuid.v4(),
                title: title,
                ingredients: ingredients,
                steps: steps,
                comments: []
            };

            const insertInfo = await recipeCollection.insertOne(newRecipe);
            const newId = insertInfo.insertedId;
            const recipe = await this.getRecipeById(newId);
            return recipe;

        }

        catch (ex) {
            throw ex;
        }


    },


    async removeRecipe(id) {
        try {
            const recipeCollection = await recipes();
            const deleteInfo = await recipeCollection.removeOne({ _id: id });
            if (deleteInfo.deletedCount === 0) {
                throw (`Could not recipe user with id of ${id}`)
            }
        }

        catch (ex) {
            throw ex;

        }


    },

    async updateRecipe(id, updatedRecipe) {
        try {
            const currentRecipe = await this.getRecipeById(id)
            let recipeUpdateInfo = {};
            if ('title' in updatedRecipe) {
                recipeUpdateInfo.title = updatedRecipe.title;
            }
            if ('ingredients' in updatedRecipe) {
                recipeUpdateInfo.ingredients = updatedRecipe.ingredients;
            }
            if ('steps' in updatedRecipe) {
                recipeUpdateInfo.steps = updatedRecipe.steps;
            }
            if ('comments' in updatedRecipe) {
                recipeUpdateInfo.comments = updatedRecipe.comments;
            }

            let updateCommand = {
                $set: recipeUpdateInfo
            };

            const recipeCollection = await recipes();
            const updateRecipe = await recipeCollection.updateOne({ _id: id }, updateCommand);
            const newupdatedRecipe = await this.getRecipeById(id);
            return newupdatedRecipe;
       }

        catch (ex) {

           throw ex;
       }


    },
    async getAllCommentsByRecipeID(id) {
        try {
            const recipeCollection = await recipes();
            const recipe = await recipeCollection.findOne({ _id: id });
            if (!recipe) throw "Recipe not found";
            let result = recipe.comments;
            result.forEach(function (e) {
                e.recipeId = recipe._id;
                e.recipeTitle = recipe.title;
                return e;
            });
            return result;
        }

        catch (ex) {
            throw ex;

        }
    },
    async getCommentByCommentID(id) {
        try {
            id = String(id);
            const recipeCollection = await recipes();
            const recipe = await recipeCollection.findOne({ $where: "this.comments._id = '" + id + "'" });
            if (!recipe) {
                throw "comment not found"
                return;
            };
            let result = recipe.comments.filter(async function (obj) {
                return  await obj._id == id;
            })[0];
            if (!result) throw "comment not found";
            result.recipeId = recipe._id;
            result.recipeTitle = recipe.title;
            return result;

        }

        catch (ex) {
            throw ex;
        }
    },

    async addComment(recipeId, newPoster, newComment) {
        try {
            const recipeCollection = await recipes();
            commentID = uuid.v4()
            let newCommentObject = {
                _id: commentID,
                poster: newPoster,
                comment: newComment
            };

            const addedComment = await recipeCollection.updateOne({ _id: recipeId }, { $push: { "comments": newCommentObject } });
            const comment = await this.getCommentByCommentID(commentID);
            return comment;
        
        }
        catch (ex)
        {
            throw ex;
        }

    },
      


    async updateComment(recipeId, commentId, updatedComment) {
        try {
            const currentComment = await this.getCommentByCommentID(commentId);
            if (!currentComment) throw "Comment not found";

            let commentUpdateInfo = currentComment;
            if ('poster' in updatedComment) {
                commentUpdateInfo.poster = updatedComment.poster;
            }
            if ('comment' in updatedComment) {
                commentUpdateInfo.comment = updatedComment.comment;
            }
            delete commentUpdateInfo.recipeId;
            delete commentUpdateInfo.recipeTitle;
            let updateCommand = {
                $set: { "comments.$": commentUpdateInfo }
            };
            const recipeCollection = await recipes();
            const data = await recipeCollection.updateOne({ "comments._id": commentId }, updateCommand);
            const newComment = await this.getCommentByCommentID(commentId);
            return newComment;
        }
        catch (ex) {

            throw ex;
        }
         
    },
    async deleteComment(commentID) {
        try {
            const recipeCollection = await recipes();
            const updationInfo = await recipeCollection.updateOne(
                { "comments._id": commentID },
                { $pull: { comments: { _id: commentID } }}
            );
            
            console.log("deleted");
            if (updationInfo.updatedCount === 0) {
                throw (`Could not comment with id of ${commentID}`)
            }
            return updationInfo;
        }
        catch (ex)
        {
            throw ex;
        }
   
            
    }
}
module.exports = exportedMethods;