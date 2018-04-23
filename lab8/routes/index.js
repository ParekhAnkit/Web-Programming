// JavaScript source code
const palindromeRoutes = require("./palindrome");

const constructorMethod = (app) => {
    app.use("/", palindromeRoutes);

    app.use("*", (req, res) => {
        res.redirect("/");
    })
};

module.exports = constructorMethod;