import mongoose from "mongoose";

mongoose.set('strictQuery', true);



async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (err) {
        console.error(`Error connecting to MongoDB: ${err}`);
        process.exit(1);
    }
};



export default connectDB;
