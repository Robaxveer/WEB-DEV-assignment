import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: "./.env"
});

const PORT = process.env.PORT || 4000;

const startServer = async () => {
    try {
        console.log("Connecting to MongoDB Atlas...");
        await connectDB();

        app.on("error", (error) => {
            console.error("Express Application Error:", error);
            throw error;
        });

        app.listen(PORT, () => {
            console.log(`\n🚀 Server is running at port: ${PORT}`);
            console.log(`📡 Local URL: http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err.message);
        console.error("⚠️  Tip: Ensure your current IP is whitelisted in MongoDB Atlas Network Access!");
    }
};

startServer();

