import mongoose  from 'mongoose';

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.DATABASE.replace(
            '<db_password>',
            process.env.DATABASE_PASSWORD
          ));
          console.log('DB Connection Successful 🖐');
    }catch(error){
        console.log(error);
        
    }
}

export default connectDB;