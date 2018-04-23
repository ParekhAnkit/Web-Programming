// JavaScript source code
const express = require('express');
const router = express.Router();
const data = require("../data");
const myInfo = data.myData;

async function education() {
    const education =
        [
            {
                schoolName: "Stevens Institute of Technology",
                degree: "Master of Science in Computer Science",
                favoriteClass: "My favorite classes are Web Programming and Web Analytics because both these classes focuses on latest technologies and web and also analytics which are my fields of interest.",
                favoriteMemory: "One of my most memorable time at Stevens was the Holi celebration because of many reasons. One of the biggest reason was I was missing my home and was surprised to see such an amazing celebration of my favorite festival here in United States. Similar to India all the of my friends were dressed in white and there were colors and water available for us too play with and music for dancing.I also made a few new friends. It was very special day for me as it made me like I am at home also our campus is one the best things about Stevens, playing holi with friends with music and food on a bright day on the edge of hudson river was an unforgettable expereince. "
            },
            {
                schoolName: "St. Francis Institute of Technology(SFIT) - Mumbai University",
                degree: "Bachelor of Engineering in Information Technology",
                favoriteClass: "My Favorite classes were Basics of Electrical and Electronics, Engineering Drawing and Software Project Management. All of these subjects were different from other IT data mining or coding subjects",
                favoriteMemory: "One of my most memorable memory at SFIT was the annual college Fest Iris in my thrid year where I was a major part of the sports and Oranganization committee. Especailly at end of the day of the Fest when everything went well and hardwork and efforts of 15 days were successful, it felt really good when all the teachers commeded me and my team. "
            }
        ]
    return education
}



router.get('/', async function (req, res) {
    try {
        abc = await education()
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