# Job Portal 🚀

A full-stack Job Portal application built using the MERN stack. The platform allows users to explore job opportunities, search and filter jobs, authenticate securely, and manage their applications.

## ✨ Features

* 🔐 User authentication with Clerk
* 🔎 Search and filter jobs
* 💼 Browse available job opportunities
* 📄 Resume upload functionality
* ☁️ Cloudinary integration for file uploads
* 🔒 Secure authentication and authorization
* 📱 Responsive user interface
* 🚨 Error monitoring with Sentry

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Clerk Authentication

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT

### Other Technologies

* Cloudinary
* Sentry
* Git & GitHub

## 📁 Project Structure

```text
Job-Portal/
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── package.json
│
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/adityacodes2425/Job-Portal.git
cd Job-Portal
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Create frontend environment variables

Create `.env` inside `client` and add your Clerk Publishable Key:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### 4. Install backend dependencies

```bash
cd ../server
npm install
```

### 5. Create backend environment variables

Create a `.env` file inside the `server` folder:

```env
MONGO_URI=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

CLERK_SECRET_KEY=your_clerk_secret_key
JWT_SECRET=your_jwt_secret
```

### 6. Run the application

Start the backend:

```bash
cd server
npm run server
```

Start the frontend in another terminal:

```bash
cd client
npm run dev
```

## 🔐 Environment Variables

Make sure `.env` files are added to `.gitignore` and never push API keys, database credentials, or secret keys to GitHub.

## 🚀 Future Improvements

* Advanced job recommendation system
* Recruiter dashboard
* Application tracking system
* Email notifications
* AI-powered job recommendations
* Improved admin dashboard

## 👨‍💻 Author

**Aditya Vikram**

GitHub: [@adityacodes2425](https://github.com/adityacodes2425)

---

⭐ If you like this project, consider giving it a star!
