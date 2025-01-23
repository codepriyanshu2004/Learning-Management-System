import jwt from "jsonwebtoken";

import AppError from "../utils/error.util.js";
import User from "../models/user.model.js";


export const isLoggedIn = async (req, _res, next) => {
  // extracting token from the cookies
  const { token } = req.cookies;

  // If no token send unauthorized message
  if (!token) {
    return next(new AppError("Unauthorized, please login to continue", 401));
  }

  // Decoding the token using jwt package verify method
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);

  // If no decode send the message unauthorized
  if (!decoded) {
    return next(new AppError("Unauthorized, please login to continue", 401));
  }

  // If all good store the id in req object, here we are modifying the request object and adding a custom field user in it
  req.user = decoded;

  // Do not forget to call the next other wise the flow of execution will not be passed further
  next();
};



// Middleware to check if user is admin or not
export const authorizeRoles = (...roles) =>
  async (req, _res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to access this route", 403)
      );
    }

    next();
  };


  export const  authorizeSubscriber = async(req,_res,next) =>{
    
   const user = await User.findById(req.user.id);




    if (user.role!== "ADMIN" && user.subscription.status!=="active") {
      return next(new AppError("please subscribe to access this route,",403))
      
    }
    next();
  }

