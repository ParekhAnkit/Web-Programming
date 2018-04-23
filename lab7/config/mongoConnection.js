// JavaScript source code
const MongoClient = require("mongodb").MongoClient;;

const settings = {
    mongoConfig: {
        serverUrl: "mongodb://localhost:27017/",
        database: "lab7-recipes"
    }
};

let fullMongoUrl = settings.mongoConfig.serverUrl + settings.mongoConfig.database;
let _connection = undefined

let connectDb = async () => {
    if (!_connection) {
        _connection = MongoClient.connect(fullMongoUrl)
            await ((db) => {
                return db;
            });
    }

    return _connection;
};

module.exports = connectDb;