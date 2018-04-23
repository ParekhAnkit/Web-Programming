// JavaScript source code
const express = require('express');
const router = express.Router();
const data = require("../data");
const myInfo = data.myData;


async function about() {
    const about = {
        name: "Ankit Parekh",
        biography: "Hi, Everyone!. I am Ankit Parekh.I am Computer Science Graduate Student at Stevens Institute of Technology.I have created this page as a part of an Assignment in inte course called Web Programming And to give you a little Information about myself.",
        favoriteShows: ["Friends", "Lucifer", "Supernautral", "Game of Throne", "House of Cards",],
        hobbies: ["Travelling", "Sports", "Gaming"]
    }
    return about
}




router.get('/', async function (req, res) {
    try {
        abc = await about()
        res.json(abc)

    }
    catch (err) {
        res.status(404).json({ message: "Post not found" });
    }
});


router.post("/", (req, res) => {
    // Not implemented
    res.status(501).send();
});

module.exports = router;