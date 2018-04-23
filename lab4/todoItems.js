// JavaScript source code
const mongoCollections = require("./mongoCollection");
const todo = mongoCollections.todoItems;
const uuidv4 = require("uuid/v4");

module.exports = {
   
    async getTask(id) {
        try {
            if (!id) throw "You must provide an id to search for";

            const todoCollection = await todo();
            const task = await todoCollection.findOne({ _id: id });
            if (task === null) throw "No task with that id";

            return task;
        }
        catch (ex) {
            throw ex;
        }



    },

    async getAllTasks() {
        try {
            const todoCollection = await todo();

            const tasks = await todoCollection.find({}).toArray();

            return tasks;
        }
        catch (ex) {
            throw ex;

        }

    },

    async createTask(title, description) {
        try {
            if (!title) throw "You must provide a Title for your task";

            if (!description)
                throw "You must provide a description";

            //if (breeds.length === 0) throw "You must provide at least one breed.";
            const todoCollection = await todo();

            let newTask = {
                _id: uuidv4(),
                title: title,
                description: description,
                completed: false,
                completedAt: null
            };

            const insertInfo = await todoCollection.insertOne(newTask);
            if (insertInfo.insertedCount === 0) throw "Could not create task";

            const newId = insertInfo.insertedId;

            const task = await this.getTask(newId);
            return task;
            
        }
        catch (ex)
        {
            throw ex;


        }
    },
    async removeTask(id) {
        try {
            if (!id) throw "You must provide an id to search for";

            const todoCollection = await todo();
            const deletionInfo = await todoCollection.removeOne({ _id: id });

            if (deletionInfo.deletedCount === 0) {
                throw `Could not delete task with id of ${id}`;
            }
        }

        catch (ex) {
            throw ex;

        }

    },
    async completeTask(taskId) {
        try {
            if (!taskId) throw "You must provide an id to search for";

            let date = new Date();
            let current_hour = date.getHours();
            let current_minute = date.getMinutes();

            const todoCollection = await todo();
            const modifiedTask = {
                completed: true,
                completedAt: `${current_hour}:${current_minute}`
            };


            const updatedInfo = await todoCollection.updateOne({ _id: taskId }, modifiedTask);
            if (updatedInfo.modifiedCount === 0) {
                throw "could not update task successfully";
            }

            return await this.getTask(taskId);
        }
        catch (ex) {
            throw ex;

        }
    }
};