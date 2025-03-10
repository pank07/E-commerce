import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://pankajsonwani:pankajMongodb07@pankaj-db.dutpt.mongodb.net/?retryWrites=true&w=majority&appName=pankaj-DB')
        console.log(`Successfully connected to mongoDB`)
    } catch (error) {
        console.error(`ERROR:${error.message}`)
        process.exit(1)
    }
};
export default connectDB;