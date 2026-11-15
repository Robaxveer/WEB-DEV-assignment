# Intro to Backend Development & Postman Assignment

This repository implements the complete Backend Web Development project based on the **freeCodeCamp Tutorial by Shivani** ([Watch on YouTube](https://www.youtube.com/watch?v=KOutPbKc9UM&t=2s)).

It demonstrates:
- **Node.js & Express.js** server setup with ES Modules (`type: "module"`).
- **MongoDB Atlas** database integration using **Mongoose**.
- **Model-Route-Controller (MRC)** architecture.
- **Authentication**: User Registration (with `bcrypt` password hashing), Login, and Logout.
- **Full CRUD Operations**: Create, Read, Update, and Delete operations for Posts.
- **Postman API Testing**: Complete Postman Collection ready to import and test.

---

## 📁 Project Structure

```
.
├── backend/
│   └── src/
│       ├── config/
│       │   ├── constants.js       # Database name constant
│       │   └── database.js        # Mongoose database connection
│       ├── controllers/
│       │   ├── user.controller.js # Auth logic: register, login, logout
│       │   └── post.controller.js # CRUD logic: create, get, update, delete
│       ├── models/
│       │   ├── user.model.js      # Mongoose User schema & bcrypt hook
│       │   └── post.model.js      # Mongoose Post schema
│       ├── routes/
│       │   ├── user.route.js      # User endpoints
│       │   └── post.route.js      # Post endpoints
│       ├── app.js                 # Express application configuration
│       └── index.js               # Server entry point
├── postman_collection.json        # Pre-configured Postman API collection
├── .env.example                   # Environment variables template
├── .gitignore                     # Git ignore rules (node_modules, .env)
├── package.json                   # Dependencies and scripts
└── README.md                      # Documentation & instructions
```

---

## 🛠️ Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB Atlas** Account & Cluster with Network IP whitelisted (`0.0.0.0/0` or current IP)
- **Postman** (Desktop or Web)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Robaxveer/WEB-DEV-assignment.git
cd WEB-DEV-assignment
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory:
```env
PORT=4000
MONGODB_URI=mongodb+srv://veertambi25cse_db_user:strNOPwEPZfzwSv4@cluster0.wr9gqyj.mongodb.net
```
*(Make sure your MongoDB Atlas cluster allows incoming connections from your IP under **Network Access**).*

### 4. Run the Server

**Development Mode (auto-restart with Nodemon):**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

When connected successfully, you will see:
```
🚀 Server is running at port: 4000
✅ MongoDB connected! DB Host: cluster0-shard-00-00.wr9gqyj.mongodb.net
```

---

## 📮 Testing APIs with Postman

### Import the Collection
1. Open the **Postman** desktop application (or web client).
2. Click **Import** in the top-left corner.
3. Drag and drop the `postman_collection.json` file from this repository.
4. All 7 API requests will load organized into two folders: **User Auth** and **Post CRUD**.

### API Endpoints Reference

#### Base URL: `http://localhost:4000`

### 1. User Authentication Routes (`/api/v1/users`)
| Method | Endpoint | Description | Request Body |
|---|---|---|---|
| `POST` | `/api/v1/users/register` | Register a new user | `{ "username": "veertambi", "email": "veer@example.com", "password": "password123" }` |
| `POST` | `/api/v1/users/login` | Login user | `{ "email": "veer@example.com", "password": "password123" }` |
| `POST` | `/api/v1/users/logout` | Logout user | `{ "email": "veer@example.com" }` |

### 2. Post CRUD Routes (`/api/v1/posts`)
| Method | Endpoint | Description | Request Body / Params |
|---|---|---|---|
| `POST` | `/api/v1/posts/create` | **Create** a new post | `{ "name": "My First Post", "description": "Backend with Node & Express", "age": 21 }` |
| `GET` | `/api/v1/posts/getPosts` | **Read** all posts | *None* |
| `PATCH` | `/api/v1/posts/update/:id` | **Update** post by ID | `{ "name": "Updated Title", "description": "Updated info", "age": 22 }` |
| `DELETE` | `/api/v1/posts/delete/:id` | **Delete** post by ID | *None (Pass `:id` in URL)* |

