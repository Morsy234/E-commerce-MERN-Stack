import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import connectDB from './config/connectDB.js';
import 'dotenv/config';
import userRoutes from './routes/userRoutes.js';
import path from 'path';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRoutes.js';
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));



app.use('/api/users', userRoutes);
app.use('/api/products', productRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Connect to MongoDB
connectDB();
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});


