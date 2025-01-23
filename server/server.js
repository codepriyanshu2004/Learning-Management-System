
import {config} from "dotenv";
config();


import  app  from "./app.js"
import connectToDb from "./config/dbConnection.js";
import cloudinary from "cloudinary"
import Razorpay from 'razorpay';

// Cloudinary configuration



cloudinary.v2.config({ 
    cloud_name: 'dlslbknmx', 
    api_key: '848514737666954', 
    api_secret: "zw2diualmXdC_-ZRKMcA6-5jFgo"	
     // Click 'View API Keys' above to copy your API secret
});




// Razorpay .configuration

export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});


const PORT = process.env.PORT|| 5000;

app.listen(PORT ,async () =>{
    await connectToDb();
    console.log(`App is running at http://localhost:${PORT}`);
    
});