# 🛒 E-commerce MERN Stack

A full-featured e-commerce platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that provides a seamless online shopping experience for customers and powerful management tools for administrators.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-18.0+-blue.svg)

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
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
- 🔑 Password reset functionality
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
- 📈 Sales reports and statistics
- 🖼️ Image upload and management

### Additional Features
- 🔒 JWT-based authentication
- 🎨 Modern and intuitive UI/UX
- ⚡ Fast and optimized performance
- 🔄 Real-time updates
- 📧 Email notifications
- 💰 Multiple payment gateway integration options

## 🎥 Demo

**Live Demo:** [Add your deployed link here]

**Test Accounts:**
- Admin: `admin@example.com` / `admin123`
- User: `user@example.com` / `user123`

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Redux** - State management
- **React Router** - Navigation
- **Axios** - HTTP client
- **Bootstrap/Material-UI** - UI components
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **Multer** - File uploads

### Additional Tools
- **Cloudinary** - Image hosting
- **Stripe/PayPal** - Payment processing
- **Nodemailer** - Email service
- **dotenv** - Environment variables
- **Postman** - API testing

## 📦 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local or MongoDB Atlas)
- **Git**

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
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=your_mongodb_connection_string

# JWT Secret
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d

# Cloudinary (Image Upload)
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Email Configuration (Nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_EMAIL=your_email@gmail.com
SMTP_PASSWORD=your_email_password

# Payment Gateway (Optional)
STRIPE_SECRET_KEY=your_stripe_secret_key
PAYPAL_CLIENT_ID=your_paypal_client_id

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env)

Create a `.env` file in the `frontend` directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

## ▶️ Running the Application

### Development Mode

**Run Backend:**
```bash
cd backend
npm run dev
```

**Run Frontend:**
```bash
cd frontend
npm start
```

### Production Mode

**Build Frontend:**
```bash
cd frontend
npm run build
```

**Run Backend with Frontend:**
```bash
cd backend
npm start
```

The application will be running at:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

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

## 📸 Screenshots

### Homepage
![Homepage](screenshots/homepage.png)

### Product Page
![Products](screenshots/products.png)

### Shopping Cart
![Cart](screenshots/cart.png)

### Admin Dashboard
![Admin](screenshots/admin-dashboard.png)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

**Your Name**

- GitHub: [@Morsy234](https://github.com/Morsy234)
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Thanks to all contributors
- Inspiration from various MERN stack tutorials
- UI design inspiration from modern e-commerce platforms

---

⭐ If you found this project helpful, please give it a star!

**Made with ❤️ using MERN Stack**
