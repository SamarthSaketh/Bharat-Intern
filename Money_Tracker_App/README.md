# Money Tracker App

A web application to manage your expenses and income efficiently, providing budget tracking and financial insights for better money management.

## Features

- **Expense & Income Tracking**: Add, update, and remove expenses and income entries.
- **Budget Management**: Set budgets and track your spending against them.
- **Financial Insights**: View summaries and insights for better money management.
- **Secure Data Storage**: Data stored securely in MongoDB.

## Requirements

- Node.js
- npm
- MongoDB (local or Atlas)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/SamarthSaketh/Bharat-Intern.git
cd Bharat-Intern/Money%20Tracker%20App
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory of the project:

```env
MONGODB_URI=your_mongodb_connection_string
```

> Replace `your_mongodb_connection_string` with your actual MongoDB connection string. You can use MongoDB Atlas or a local MongoDB instance.

### 4. Run the Application

```bash
npm start
```

The app will be running on `http://localhost:3000` by default.

## Usage

1. Open the app in a browser.
2. Add your expenses and income with the provided form.
3. Monitor your budget and view insights.
4. All data is stored in your MongoDB database.

## File Structure

* `app.js` or `server.js`: Main server file
* `views/`: HTML templates (if using a templating engine)
* `.env`: Environment variables

