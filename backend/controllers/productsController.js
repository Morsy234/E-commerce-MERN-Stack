import ProductModel from "../models/productsModel.js";
import mongoose from "mongoose";


//Function for Add Product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

    // Collect uploaded image paths
    const images = [];
    if (req.files && req.files.length > 0) {
      req.files.forEach(file => {
        // file.path will be like: uploads/Nike_Shoes/image-123.jpg
        images.push(`/${file.path.replace(/\\/g, "/")}`); // convert backslashes for Windows
      });
    }

    const productData = {
      name,
      description,
      category,
      subCategory,
      price: Number(price),
      sizes: JSON.parse(sizes),
      bestSeller: bestSeller === "true",
      image: images,
      date: Date.now(),
    };

    const savedProduct = await ProductModel.create(productData);

    res.status(200).json({
      success: true,
      message: "Product added successfully",
      product: savedProduct,
    });
  } catch (error) {
    console.error("Add product error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};



//Function for List Products
const listProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: error.message });
  }
};

//Function for remove product

// const removeProduct = async (req, res) => {
//   try {
//     await ProductModel.findByIdAndDelete(req.body.id);
//     res.json({ success: true, message: "Product removed" });
//   } catch (error) {
//     console.log(error);
//     res.json({ sucess: false, message: error.message });
//   }
// };

const removeProduct = async (req, res) => {
  try {
    const { id } = req.body;
    console.log("Delete request body:", req.body); // debug

    const deletedProduct = await ProductModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found or already deleted" });
    }

    res.json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    console.error("Remove product error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

//Function for single product info
// const singleProduct = async (req, res) => {
//   try {
//     const { productId } = req.body;
//     const product = await ProductModel.findById(productId);
//     res.json({ sucess: true, product });
//   } catch (error) {
//     console.log(error);
//     res.json({ sucess: false, message: error.message });
//   }
// };


const singleProduct = async (req, res) => {
  try {
    const { id } = req.body;

    //  Check if ID is provided
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    //  Check if ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID format",
      });
    }

    //  Find product
    const product = await ProductModel.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Single product error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


export { addProduct, listProducts, removeProduct, singleProduct };