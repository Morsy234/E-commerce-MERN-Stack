# 🛒 E-commerce MERN Stack Project

This project is a **Full-Stack E-commerce Website** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.  
It allows users to browse products, manage their carts, and place orders. Admins can manage products, view orders, and track customers.

---

## 🚀 Features

### 👤 User Features
- 🏠 User-friendly interface with React and Tailwind CSS  
- 🔍 Product search and category filtering  
- 🛒 Add to cart, update quantity, and remove items  
- 💳 Checkout and order placement  
- 👨‍💻 Login & Registration using JWT Authentication  
- 📦 View order history and details  

### 🛠️ Admin Features
- ➕ Add, edit, and delete products  
- 📊 View all orders and manage their statuses  
- 👥 Manage users  
- 💰 Dashboard for sales overview  

---

## 🧱 Tech Stack

| Category | Technologies Used |
|-----------|-------------------|
| **Frontend** | React.js, Tailwind CSS, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose |
| **Authentication** | JSON Web Token (JWT), bcrypt |
| **Version Control** | Git & GitHub |
| **Hosting** | (Optional: Render / Vercel / Netlify / MongoDB Atlas) |

---

E-commerce/
│
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ ├── App.jsx
│ │ └── index.js
│
├── .env
├── package.json
└── README.md


---

## ⚙️ Installation and Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Morsy234/E-commerce-MERN-Stack.git
cd E-commerce-MERN-Stack

### 2️⃣ Install dependencies for both backend and frontend
cd backend
npm install
cd ../frontend
npm install

### 3️⃣ Setup environment variables

Create a .env file inside the backend folder and add the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

4️⃣ Run the backend server
cd backend
npm start

5️⃣ Run the frontend React app
cd frontend
npm run dev


Your project should now be running on:

Frontend → http://localhost:5173 (if using Vite)

Backend → http://localhost:5000

## 📁 Folder Structure

