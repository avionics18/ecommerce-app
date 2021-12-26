const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

// --> REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET_KEY
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// --> LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    // If user not found
    if (!user) {
      return res.status(401).json("Wrong Credentials!");
    }

    // If user found
    const hashedPass = CryptoJs.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET_KEY
    );
    const originalPassword = hashedPass.toString(CryptoJs.enc.Utf8);
    // wrong password
    if (req.body.password !== originalPassword) {
      return res.status(401).json("Wrong Credentials!");
    }

    // correct password
    // - generate a jwt access token
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "3d" }
    );
    // - don't send password to client
    const { password, ...others } = user._doc; // mongoDB stores our document in _doc
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
