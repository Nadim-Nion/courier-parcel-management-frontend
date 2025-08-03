# 📦 Courier & Parcel Management System (Frontend)

A responsive web application that allows users to book and track courier parcels, assign delivery agents, and manage logistics efficiently. This is the **frontend** built with React.js, React Router, Tailwind CSS, and DaisyUI.

---

## 🚀 Live Demo

🔗 [Live Site on Netlify](https://courier-parcel-frontend.netlify.app/login)

---

## 🧑‍💻 Technologies Used

- **React.js**
- **React Router DOM**
- **Tailwind CSS**
- **DaisyUI**
- **Axios**

---

## 📋 Features

### 🧍‍♂️ Customer:

- Register / Login
- Book a parcel pickup (pickup address, delivery address, parcel size/type, COD or prepaid)
- View booking history and current status
- Track parcel in real-time on a map

### 🚚 Delivery Agent:

- View assigned parcels
- Update parcel status (Picked Up, In Transit, Delivered, Failed)
- View optimized route with Google Maps API

### 👨‍💼 Admin:

- Dashboard with metrics (daily bookings, failed deliveries, COD amounts)
- Assign agents to parcels
- View all users and bookings
- Export analytics reports (CSV/PDF)

---

## 🔐 Role-Based Routing

- **Protected Routes** using JWT
- **Conditional Layouts** for Admin, Customer, and Agent Dashboards
- Context API manages current user role and auth state

---

## 📂 Project Structure

```bash
.
├── dist
├── node_modules
├── public
│   ├── _redirects
│   └── vite.svg
├── src
│   ├── assets
│   ├── components
│   ├── layouts
│   │   └── MainLayout.jsx
│   ├── pages
│   │   ├── dashboard
│   │   │   ├── Admin.jsx
│   │   │   └── Customer.jsx
│   │   └── shared
│   │       ├── Footer.jsx
│   │       ├── Login.jsx
│   │       ├── Navbar.jsx
│   │       └── Register.jsx
│   ├── routes
│   │   └── BasicRoute.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
└── package-lock.json

```

---

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nadim-Nion/courier-parcel-management-frontend.git
   cd courier-parcel-management-frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```

---

## 🌐 Deployment

This frontend is deployed using Netlify.
Make sure to add the following to the /public/\_redirects file for client-side routing:

```bash
/*    /index.html   200
```

---

## Author

Hi, I am Nadim Mahmud Nion. I have recently concluded my graduation from the department of Computer Science and Engineering (CSE) at Daffodil International University (DIU). I have been learning MERN Stack Web Development since 2022.

I am skilled in the following technologies:

- React
- Express.js
- TypeScript
- Mongoose
- Postman
- MongoDB Compass
- NoSQLBooster
- Node.js
- MongoDB Atlas
- JWT
- Stripe
- Vite
- React Router
- Firebase (Authentication & Hosting)
- Vercel
- JavaScript
- Advanced JavaScript
- Daisy UI
- Bootstrap
- Tailwind
- HTML5
- CSS3
- Media Query

I have built multiple projects using these skills. You are invited to visit my GitHub profile to explore my work — and don't forget to ⭐ star the projects you like!

Developed by Nadim Mahmud Nion 💻
