# 🛠️ React Dashboard with Laravel API

## 📌 Overview
This is a **React.js Dashboard** built using:
- `React Router` for navigation
- `Context API` for state management
- `Axios` for API requests
- **Laravel API (Backend from Najeeb's YouTube Course)**

I did not develop the backend; I used the **Laravel API** provided in the course by **Najeeb**.

---

## 🚀 Features
✅ User authentication (Login & Logout)  
✅ Protected routes using `React Router`  
✅ Context API for global state management  
✅ Fetching & updating data using `Axios`  
✅ Backend integration with Laravel API  

---

## 🏗️ Tech Stack
### **Frontend (React)**
- React.js
- React Router
- Context API
- Axios
- Bootstrap 

### **Backend (Laravel)** (Not developed by me)
- Laravel API from **Najeeb's Course** [react Course](https://www.youtube.com/watch?v=EtNyJQItRZk&list=PLpr1Lg_f0v3ojNKR4WzZ_SEXhiKBHDQmB)
- JWT Authentication
- Middleware protection

---

## 📂 Project Structure
```bash
📦 src
├── 📂 Auth
│   ├── Login.jsx
│   ├── PersistLogin.jsx
│   ├── ProtectedRouter.jsx
│   ├── signUp.css
│   ├── signUp.jsx
│
├── 📂 Components
│   ├── 📂 DashBoard
│   │   ├── DashNav.jsx
│   │   ├── DashTable.jsx
│   │
│   ├── 📂 SideBar
│   │   ├── SideBar.css
│   │   ├── SideBar.jsx
│   │   ├── SideBarItem.jsx
│   │
│   ├── 📂 Forms
│   │   ├── Header_dashboard.jsx
│   │   ├── header.jsx
│   │   ├── LabelAndInput.jsx
│
├── 📂 Context
│   ├── SideBarActiveContext.jsx
│   ├── UserContext.jsx
│
├── 📂 Layout / Dashboard
│   ├── AddNewProduct.jsx
│   ├── AddNewUser.jsx
│   ├── EditUser.jsx
│   ├── Product.jsx
│   ├── Users.jsx
│
├── 📂 pages
│   ├── About.jsx
│   ├── Dashboard.jsx
│   ├── Home.jsx
│
├── App.css
├── App.jsx
├── index.css
├── index.js

---


### 1️⃣ Clone the repository
```bash
git clone https://github.com/ENG-BXI/React-Dashboard-learning
cd my-dashboard
```

### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Set up .env file
```bash
Create a .env file in the root and add:
```

### 4️⃣ Run the project
```bash
npm run dev
```
### 🔑 Authentication & API Integration
Login Request
javascript
``` bash
axios.post(`${import.meta.env.VITE_API_URL}/login`, { email, password }, { withCredentials: true })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```
### Protecting Routes
javascript

``` bash
const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};
```
### 🛡️ Security Considerations
JWT tokens stored in HttpOnly Cookies for security
Protected API requests using Laravel Middleware
Role-based access control (RBAC) (if implemented)
📌 Backend Setup (Laravel API)
⚠ I did not develop the backend; it was taken from Najeeb's YouTube Course.

### 🤝 Credits
Backend by: Najeeb's [YouTube Course ](https://www.youtube.com/watch?v=EtNyJQItRZk&list=PLpr1Lg_f0v3ojNKR4WzZ_SEXhiKBHDQmB)

Frontend developed by: Abdulrahman Muneer Aljeeidi
⭐ Contributing
Feel free to submit pull requests! 🚀

### 📜 License
This project is open-source and available under the MIT License.

---
