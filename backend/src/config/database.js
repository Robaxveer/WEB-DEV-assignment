import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

const connectDB = async () => {
    try {
        const rawUri = process.env.MONGODB_URI || "";
        const uri = rawUri.endsWith("/")
            ? `${rawUri}${DB_NAME}`
            : `${rawUri}/${DB_NAME}`;

        const connectionInstance = await mongoose.connect(uri);
        console.log(`\n✅ MongoDB connected! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error.message);
        throw error;
    }
};

export default connectDB;

