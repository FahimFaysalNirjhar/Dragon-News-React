# 🐉 Dragon News

A modern news web application built with **React**, **React Router**, **Firebase Authentication**, and **Tailwind CSS (DaisyUI)**.
Users can browse news by categories, view detailed articles, and securely register/login using email, Google, or GitHub authentication.

---

## 🚀 Features

- 🔐 Firebase Authentication (Email/Password, Google, GitHub)
- 🧑 User registration with email verification
- 🔑 Protected routes (Private Routing)
- 📰 Dynamic news categories
- 📄 News details page
- ⚡ Loading spinner for async states
- 🔄 Password reset functionality
- 🎯 Redirect after login (return to previous page)
- 🎨 Responsive UI with Tailwind CSS + DaisyUI
- 📦 Context API for global auth state

---

## 🛠️ Tech Stack

- React.js
- React Router
- Firebase Authentication
- Context API
- Tailwind CSS
- DaisyUI
- Vite

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Header/
│   ├── NewsDetailsCard/
│   ├── Loading/
│
├── pages/
│   ├── Home/
│   ├── Login/
│   ├── Register/
│   ├── NewsDetails/
│   ├── Career/
│
├── Provider/
│   └── AuthProvider.jsx
│
├── routes/
│   └── PrivateRoute.jsx
│
├── Firebase/
│   └── firebase.config.js
│
└── App.jsx
```

---

## 🔐 Authentication Features

- Create account with email & password
- Login with email/password
- Google login
- GitHub login
- Email verification after registration
- Password reset via email

---

## ⚙️ Installation & Setup

---

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/dragon-news.git
cd dragon-news
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Setup environment variables

Create a `.env` file in the root directory:

```env
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
```

---

### 4️⃣ Run the project

```bash
npm run dev
```

---

## 👨‍💻 Author

**Fahim Faysal**

- 🐙 GitHub: [https://github.com/FahimFaysalNirjhar](https://github.com/FahimFaysalNirjhar)
- 📧 Email: [fahimfaysal1995@gmail.com](mailto:fahimfaysal1995@gmail.com)

⭐ Built with React + Firebase
💡 Passionate about frontend development and clean UI

---

## 📜 License

This project is created for educational purposes.
