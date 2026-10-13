// import dns from "node:dns";
import mongoose from "mongoose";

// dns.setServers(["1.1.1.1"]);

const connectDB = async () => {
    mongoose.connection.on("connected", () => console.log("Database Connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`);
}

export default connectDB;