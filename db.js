import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});