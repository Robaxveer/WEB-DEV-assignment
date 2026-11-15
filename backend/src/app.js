import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health-check / root route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "API server is up and running!",
        routes: {
            users: "/api/v1/users",
            posts: "/api/v1/posts"
        }
    });
});

// routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

export default app;

