const router = require("express").Router();

router.get("/usertest", (req, res) => {
    res.send("User Test is successfull.");
});

router.post("/userpost", (req, res) => {
    const username = req.body.username;
    console.log(username);
    res.send("Username: " + username);
});

module.exports = router;