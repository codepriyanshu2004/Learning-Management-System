import mongoose from "mongoose";

mongoose.set ("strictQuery",false);

const connectToDb = async() =>{


    try{

        const {connection} = await mongoose.connect(
             "mongodb+srv://priyanshu:Bitturajs123@cluster0.jx1ks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"                  
             //   //process.env.MONGO_URI || 
        )
    
    
        if(connection){
            console.log(`Connected to MongoDB ${connection.host}`);
            
        }




    }catch(e){
        console.log(e);
        process.exit(1);
        
    }

   
}

export default connectToDb