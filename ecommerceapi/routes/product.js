const router = require("express").Router();
const { verifyToken, verifyTokenAndAdmin } = require("./verifyToken");
const Product = require("../models/Product");

// --> CREATE PRODUCT (only Admin)
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// --> UPDATE PRODUCT (only Admin)
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// --> DELETE PRODUCT (only Admin)
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted successfully.");
  } catch (err) {
    res.status(500).json(err);
  }
});

// --> GET SINGLE PRODUCT DETAILS
router.get("/find/:id", verifyToken, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// --> GET ALL PRODUCT DETAILS
router.get("/", verifyToken, async (req, res) => {
  const { new: qNew, category: qCategory } = req.query;

  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: "desc" }).limit(5);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
