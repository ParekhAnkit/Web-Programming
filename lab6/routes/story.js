// JavaScript source code
const express = require('express');
const router = express.Router();
const data = require("../data");
const myInfo = data.myData;

async function story() {
    const story =
        {
            storyTitle: "26th July - The Day Land Disappered",
            story: "One of my most Unforgettable Experience was of 26th July 2005. The two days when it rained and rained and kept raining. I was in the 5th grade very young but still I clear remember this event.This one of the most heavy rainfall that Mumbai had witnessed over the years which caused floods.Mumbai was closed for about 4 days and took about a week to get back to normal fuctioning. I was in school with others it started raining and kept on raining. We were left early, half day was anouced in our school. Some schools did not leave the students and within 6 hours water was clogged everywhere it was raining heavily and it was dark and lightning.Slowly every office, school and other ogranization anouced an holiday. It was chaos everywhere there was so much water that all sort of transportation were stopped. People could only walk but even that was difficult with the amount of water on roads and railways. People were worried for their family most of the shops were closed as they were washed out due the rain water entering into their shops.Many people were stuck in their schools or officies and had to wait until all the water cleared up. Telephone lines were not working communicating also became a problem. Overall there was a great loss of human life and resources. For a week it was difficult for mumbai to do anything as there was not even electricity.We lived in a very small building with just 10 apartments in the building. It was difficult for all of us.It was one of the most horrifying experiences, but still quite oddly satisfying to see in trouble how people helped each other. Most grocery shops were kept open and were sellings things for free or less prices just to help each other.Even in our building all the people came together and cooked spent time with each other, we played, sang songs and prayed together. Though I was young and was happy with small happiness like playing in the water and school being off. I still understood that it was a very bad experience for those who lost someone closed or suffered economically. But I feel, A silver lining in all this was that inspite our government not helping people, people survived helped, each other and even strangers by providing them food, clothing or shelter. Showing there are still good people who would help others without any selfish intent and to survive such calamities and over come problems we must unite and help each other. This is one of my most unforgettable life experiences which I faced and was a part of it."
        }
    return story
}


router.get('/', async function (req, res) {
    try {
        abc = await story()
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