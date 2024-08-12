import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDatabase = () => {
    console.log('Wait connection to the database');
    mongoose.connect(
        process.env.MONGODB_URL, {
          dbName: "dev_riso"
        }
    )
    .then(() => console.log('MongoDB Atlas Connected'))
    .catch((error) => console.log(error));  
}

export default connectDatabase;