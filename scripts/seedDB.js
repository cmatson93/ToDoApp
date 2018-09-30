const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/toDoList", {
        useMongoClient: true
    }
);

const toDoSeed = [{
        toDoName: "Eat",
        summary: 'Get some yummy food in your stomach!',
        date: new Date(Date.now())
    },
    {
        toDoName: "Finsih this project",
        summary: "You can do it don't stop!",
        date: new Date(Date.now())
    },
    {
        toDoName: "Sleep",
        date: new Date(Date.now())
    }
];

db.ToDo
    .remove({})
    .then(() => db.ToDo.collection.insertMany(toDoSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });