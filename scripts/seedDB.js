const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist", {
        useMongoClient: true
    }
);

const churchSeed = [{
        name: "Regeneration",
        location: "Oakland, CA",
        summary: 'A church in Oakland of diverse people who gather to worship Jesus.',
        date: new Date(Date.now())
    },
    {
        name: "First Baptist Oak Grove",
        location: "Oak Grove, MO",
        summary: 'Local Baptist church in a small community outside of Kansas City.',
        date: new Date(Date.now())
    },
    {
        name: "Island ECC",
        location: "Hong Kong",
        summary: 'A church dynamic English Speaking Church located on Hong Kong Island.',
        date: new Date(Date.now())
    },
    {
        name: "CCF",
        location: "Kirksville, MO",
        summary: 'A college ministry that meets at Truman State University on Wednesday nights and Sunday mornings.',
        date: new Date(Date.now())
    },
    {
        name: "CCF",
        location: "Kirksville, MO",
        summary: 'A college ministry that meets at Truman State University on Wednesday nights and Sunday mornings.',
        date: new Date(Date.now())
    },
];

db.Church
    .remove({})
    .then(() => db.Church.collection.insertMany(churchSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });