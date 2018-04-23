// JavaScript source code

const todo = require("./todoItems");
const connection = require("./mongoConnection");

const mongoCollections = require("./mongoCollection");
const todotasks = mongoCollections.todoItems;



const main = async () => {
    try {
        const addedTask1 = await todo.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
        // console.log("Sasha the dog has been added, now she will blog!");
        console.log(addedTask1);

        const addedTask2 = await todo.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
        // console.log("Sasha the dog has been added, now she will blog!");
        console.log(addedTask2);



        const allTasks = await todo.getAllTasks();
        console.log(allTasks);

        await todo.removeTask(allTasks[0]._id);
        console.log("First task removed");

        const newallTask = await todo.getAllTasks();
        console.log(newallTask);


        const completedTask = await todo.completeTask(newallTask[0]._id);
        console.log(completedTask);

        const allnewTasks = await todo.getAllTasks();
        console.log(allnewTasks);




        const db = await connection();
        await db.close();

        console.log("Done!");
    }
    catch (ex) {
        throw ex

    }
};

main();