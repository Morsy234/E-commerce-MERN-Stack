// import express from "express";
// import {
//   addProduct,
//   listProducts,
//   removeProduct,
//   singleProduct,
// } from "../controllers/productController.js";
// import upload from "../middleware/multer.js";
// import adminAuth from "../middleware/adminAuth.js";

// const productRouter = express.Router();

// productRouter.post(
//   "/add",
//   adminAuth,
//   upload.fields([
//     { name: "image1", maxCount: 1 },
//     { name: "image2", maxCount: 1 },
//     { name: "image3", maxCount: 1 },
//     { name: "image4", maxCount: 1 },
//   ]),
//   addProduct
// );
// productRouter.get("/list", listProducts);
// productRouter.post("/remove", removeProduct);
// productRouter.post("/single", singleProduct);
// export default productRouter;






import express from "express";
import {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct,
} from "../controllers/productsController.js";
import upload from "../middleware/uploadMW.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

// Add product with multiple image uploads
productRouter.post(
  "/add",
  adminAuth,
  upload.array("images", 10), // Accept up to 10 images
  addProduct
);

// List all products
productRouter.get("/list", listProducts);

// Remove product and delete its images
productRouter.post("/remove", adminAuth, removeProduct);

// Get single product details
productRouter.post("/single", singleProduct);

export default productRouter;
