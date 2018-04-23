let about = {
    name: "Ankit Parekh",
    biography: "Hi, Everyone!. I am Ankit Parekh.I am Computer Science Graduate Student at Stevens Institute of Technology.I have created this page as a part of an Assignment in inte course called Web Programming And to give you a little Information about myself.",
    favoriteShows: ["Friends", "Lucifer", "Supernautral", "Game of Throne", "House of Cards",],
    hobbies: ["Travelling", "Sports", "Gaming"]
};
let story = {
    storyTitle: "26th July - The Day Land Disappered",
    story: "One of my most Unforgettable Experience was of 26th July 2005. The two days when it rained and rained and kept raining. I was in the 5th grade very young but still I clear remember this event.This one of the most heavy rainfall that Mumbai had witnessed over the years which caused floods.Mumbai was closed for about 4 days and took about a week to get back to normal fuctioning. I was in school with others it started raining and kept on raining. We were left early, half day was anouced in our school. Some schools did not leave the students and within 6 hours water was clogged everywhere it was raining heavily and it was dark and lightning.Slowly every office, school and other ogranization anouced an holiday. It was chaos everywhere there was so much water that all sort of transportation were stopped. People could only walk but even that was difficult with the amount of water on roads and railways. People were worried for their family most of the shops were closed as they were washed out due the rain water entering into their shops.Many people were stuck in their schools or officies and had to wait until all the water cleared up. Telephone lines were not working communicating also became a problem. Overall there was a great loss of human life and resources. For a week it was difficult for mumbai to do anything as there was not even electricity.We lived in a very small building with just 10 apartments in the building. It was difficult for all of us.It was one of the most horrifying experiences, but still quite oddly satisfying to see in trouble how people helped each other. Most grocery shops were kept open and were sellings things for free or less prices just to help each other.Even in our building all the people came together and cooked spent time with each other, we played, sang songs and prayed together. Though I was young and was happy with small happiness like playing in the water and school being off. I still understood that it was a very bad experience for those who lost someone closed or suffered economically. But I feel, A silver lining in all this was that inspite our government not helping people, people survived helped, each other and even strangers by providing them food, clothing or shelter. Showing there are still good people who would help others without any selfish intent and to survive such calamities and over come problems we must unite and help each other. This is one of my most unforgettable life experiences which I faced and was a part of it."
};
let education = [
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
];
let exportedMethods = {
    getAbout() {
        return about;
    },
    getEducation() {
        return education;
    },
    getMyStory() {
        return story;
    }
};

module.exports = exportedMethods;// JavaScript source code
