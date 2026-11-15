# Intro to Backend Development - freeCodeCamp Backend Tutorial

This repository contains the complete implementation for the ["Intro to Backend Development" video tutorial](https://www.youtube.com/watch?v=KOutPbKc9UM&t=2s) published on the freeCodeCamp YouTube channel by Shivani.

➡️ **Tutorial Link:** [Watch on YouTube](https://www.youtube.com/watch?v=KOutPbKc9UM&t=2s)

➡️ **Notes & Architecture Diagram:** [Excalidraw Notes](https://excalidraw.com/#json=MZ-nK2h_8IKWFL0Nm1gxH,QJrqIq4vpqwtzvjh4YMFIA)

---

## 📋 What You'll Learn & Implement

* **Architecture:** Core backend components, Model-Route-Controller (MRC) pattern.
* **Environment:** Complete Node.js runtime with ES Modules (`"type": "module"`) and Nodemon.
* **Database:** MongoDB Atlas cloud cluster connected via Mongoose.
* **Models:** Mongoose schemas and models for `User` and `Post`.
* **Authentication:** User Registration with `bcrypt` salt hashing, Login with password comparison, and Logout.
* **CRUD Operations:** Complete Create, Read, Update, and Delete endpoints for Posts.
* **API Testing:** Complete Postman desktop collection for all endpoints.

---

## 📁 Project Structure

```text
├── backend/
│   └── src/
│       ├── config/
│       │   ├── constants.js       # Database constants
│       │   └── database.js        # Mongoose database connection
│       ├── controllers/
│       │   ├── user.controller.js # Register, login, and logout controllers
│       │   └── post.controller.js # CRUD controllers for posts
│       ├── models/
│       │   ├── user.model.js      # User schema with pre-save bcrypt hook
│       │   └── post.model.js      # Post schema (name, description, age)
│       ├── routes/
│       │   ├── user.route.js      # User routes (/register, /login, /logout)
│       │   └── post.route.js      # Post routes (/create, /getPosts, /update/:id, /delete/:id)
│       ├── app.js                 # Express application & route mounts
│       └── index.js               # Server entry point & DB initialization
├── postman_collection.json        # Pre-built Postman collection for 3rd evaluation
├── .env.example                   # Environment variables template
├── .gitignore                     # Git ignore rules (.env, node_modules)
├── package.json                   # Dependencies and scripts
└── README.md                      # Documentation
```

---

## 🚀 How to Run Locally

### 1. Install Dependencies
```sh
npm install
```

### 2. Set Up Environment Variables
Create a `.env` file in the root of the project:
```env
PORT=4000
MONGODB_URI="your_mongodb_connection_string_here"
```

*(Ensure your IP is added to **Network Access** in MongoDB Atlas).*

### 3. Start the Server
```sh
npm run dev
```
The server will start listening at:
`http://localhost:4000`

---

## 📮 Postman API Testing (Evaluation Guide)

Import the provided `postman_collection.json` directly into the Postman desktop app.

### Endpoints Implemented

#### 1. User Authentication (`/api/v1/users`)
* **Register User** (`POST http://localhost:4000/api/v1/users/register`):
  ```json
  {
    "username": "veertambi",
    "email": "veertambi@example.com",
    "password": "password123"
  }
  ```
* **Login User** (`POST http://localhost:4000/api/v1/users/login`):
  ```json
  {
    "email": "veertambi@example.com",
    "password": "password123"
  }
  ```
* **Logout User** (`POST http://localhost:4000/api/v1/users/logout`):
  ```json
  {
    "email": "veertambi@example.com"
  }
  ```

#### 2. Post CRUD Operations (`/api/v1/posts`)
* **Create Post** (`POST http://localhost:4000/api/v1/posts/create`):
  ```json
  {
    "name": "First Post",
    "description": "Learning backend web development with Node.js and Express",
    "age": 21
  }
  ```
* **Read All Posts** (`GET http://localhost:4000/api/v1/posts/getPosts`)
* **Update Post** (`PATCH http://localhost:4000/api/v1/posts/update/:id`):
  ```json
  {
    "name": "Updated Post Title",
    "description": "Updated post description",
    "age": 22
  }
  ```
* **Delete Post** (`DELETE http://localhost:4000/api/v1/posts/delete/:id`)
