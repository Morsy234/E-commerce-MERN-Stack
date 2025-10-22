# 🛒 E-commerce MERN Stack

A full-featured e-commerce platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that provides a seamless online shopping experience for customers and powerful management tools for administrators.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-18.0+-blue.svg)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

### Customer Features
- 🔐 User authentication (Register, Login, Logout)
- 👤 User profile management
- 🛍️ Browse products by categories
- 🔍 Advanced product search and filtering
- 🛒 Shopping cart management
- ❤️ Wishlist functionality
- 💳 Secure checkout process
- 📦 Order tracking and history
- ⭐ Product reviews and ratings
- 📱 Responsive design for all devices

### Admin Features
- 📊 Admin dashboard with analytics
- 📦 Product management (CRUD operations)
- 📂 Category management
- 👥 User management
- 📋 Order management and status updates
- 🖼️ Image upload and management

### Additional Features
- 🔒 JWT-based authentication
- 🎨 Modern and intuitive UI/UX
- ⚡ Fast and optimized performance
- 🔄 Real-time updates
- 📧 Email notifications
- 💰 Multiple payment gateway integration options


## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **React Router** - Navigation
- **Axios** - HTTP client
- **TailwindCSS** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **Multer** - File uploads

### Additional Tools
- **dotenv** - Environment variables
- **Postman** - API testing



## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Morsy234/E-commerce-MERN-Stack.git
cd E-commerce-MERN-Stack
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

## 🔐 Environment Variables

### Backend (.env)

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=4000

# Database
MONGODB_URI=your_mongodb_connection_string

# JWT Secret
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d




# Admin Configuration 
ADMIN_EMAIL = "youremail"
ADMIN_PASSWORD = "yourpassword"






## ▶️ Running the Application

### Development Mode

**Run Backend:**
```bash
cd backend
npm run server
```

**Run Frontend:**
```bash
cd frontend
npm run dev
```



The application will be running at:
- Frontend: `http://localhost:5174`
- Backend: `http://localhost:4000`

## 📁 Project Structure

```
E-commerce-MERN-Stack/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── orderController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── upload.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Category.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── orderRoutes.js
│   │   └── userRoutes.js
│   ├── utils/
│   │   ├── sendEmail.js
│   │   └── cloudinary.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── ...
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── ...
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   ├── slices/
│   │   │   └── ...
│   │   ├── utils/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── .env
│   └── package.json
│
├── .gitignore
├── README.md
└── LICENSE
```

## 📡 API Documentation

### Authentication Endpoints

```
POST   /api/auth/register          - Register new user
POST   /api/auth/login             - Login user
GET    /api/auth/logout            - Logout user
POST   /api/auth/forgot-password   - Request password reset
PUT    /api/auth/reset-password    - Reset password
```

### Product Endpoints

```
GET    /api/products               - Get all products
GET    /api/products/:id           - Get single product
POST   /api/products               - Create product (Admin)
PUT    /api/products/:id           - Update product (Admin)
DELETE /api/products/:id           - Delete product (Admin)
GET    /api/products/category/:id  - Get products by category
```

### Order Endpoints

```
GET    /api/orders                 - Get all orders (Admin)
GET    /api/orders/myorders        - Get user orders
GET    /api/orders/:id             - Get single order
POST   /api/orders                 - Create new order
PUT    /api/orders/:id             - Update order status (Admin)
```

### User Endpoints

```
GET    /api/users/profile          - Get user profile
PUT    /api/users/profile          - Update user profile
GET    /api/users                  - Get all users (Admin)
DELETE /api/users/:id              - Delete user (Admin)
```

##🙏 Acknowledgments

GreatStack - Special thanks to GreatStack for the tutorial and guidance
Thanks to all contributors
Inspiration from various MERN stack tutorials and resources
UI design inspiration from e-commerce platforms made by GreatStack

**Made with ❤️ using MERN Stack**
