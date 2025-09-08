# Blog Website

A full-stack blog website developed as part of the Bharat Intern Virtual Internship Program. This application allows users to read and write blog posts, providing a platform for content creation and consumption.

## 🛠️ Technologies Used

* **Frontend**: HTML, CSS, EJS (Embedded JavaScript Templates)
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Authentication**: Passport.js (for user login and registration)

## 📂 Project Structure

```
├── models/               # MongoDB models (User, Post)
├── node_modules/         # Node.js modules
├── routes/               # Express.js route handlers
├── views/                # EJS templates for frontend
├── app.js                # Main application file
├── package.json          # Project metadata and dependencies
└── package-lock.json     # Exact versions of installed packages
```

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/SamarthSaketh/Bharat-Intern.git
cd Bharat-Intern/Blog\ Website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
```

Replace `your_mongodb_connection_string` with your MongoDB connection string and `your_session_secret` with a secret key for session management.

### 4. Start the Application

```bash
npm start
```

The application will be running at [http://localhost:3000](http://localhost:3000).

## 📌 Features

* **User Authentication**: Secure login and registration system.
* **Blog Management**: Create, edit, and delete blog posts.
* **Post Viewing**: Browse and read published blog posts.
* **Responsive Design**: Mobile-friendly interface for seamless user experience.

