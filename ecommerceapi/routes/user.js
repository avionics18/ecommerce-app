const router = require("express").Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const CryptoJS = require("crypto-js");
const User = require("../models/User");

// --> UPDATE USER
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  // if password updation is there, then we need to again
  // encrypt it and then save it to the database
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET_KEY
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true } // otherwise it won't return the updated value
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// --> DELETE USER
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted successfully!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// --> GET SINGLE USER DETAILS (Only Admin)
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

// --> GET ALL USER DETAILS (Only Admin)
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const showLatestUsers = req.query.new; // query params ?new=true
  try {
    const users = showLatestUsers
      ? await User.find().sort({ _id: "desc" }).limit(5)
      : await User.find();
    users.forEach((user) => {
      delete user._doc.password;
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// --> GET USER STATS PER MONTH (Only Admin)
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
