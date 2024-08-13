import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDatabase = () => {
    console.log('Wait connection to the database');
    mongoose.connect(
        process.env.MONGODB_URL, {
          dbName: process.env.DB_NAME
        }
    )
    .then(() => console.log('MongoDB Atlas Connected'))
    .catch((error) => console.log(error));  
}

export default connectDatabase;