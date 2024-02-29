import User from '../Models/User.js';

export const Register = async (req,res,next)=>{
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });

    try{
        await newUser.save();
        res.status(201).json("User create successfully");
    }

    catch(err){
        console.error(err); // Log the error to the console
        next(err); // Pass the error to the error handler
    }
   
}