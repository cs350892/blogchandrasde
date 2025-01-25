import User from "../user.model.js";
import bcryptjs from "bcryptjs";
import catchAsync from "../utils/catchAsync.js";  // Import the utility function
import jwt from 'jsonwebtoken';

export const signup = catchAsync(async (req, res) => {
    const { username, email, password } = req.body;

    // Validate inputs
    if (!username?.trim() || !email?.trim() || !password?.trim()) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Hash password
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create new user
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

    // Save to database
    await newUser.save();

    // Send success response
    res.status(201).json({ message: "Signup success! Please login." });
});

export const signin =async(req,res,next)=>{
    const { password ,email}=req.body;
    if(!password || !email  || password==="" ||email==="" ){
        next(catchAsync(400, 'All fields are require'));
    }
    try{
  const validUser=await User.findOne({email});
  if(!validUser){
    next(catchAsync(400,'user not found'))
  }
  const validPassword =bcryptjs.compareSync(password,validUser.password);
  if(!validPassword){
    next(catchAsync(400, 'invalid password'));
  }
  const token=jwt.sign(
    {id: validUser._id},
    process.env.JWT_SECRET
  );
  res.status(200).cookie('access_token', token , {
  

  })
    }
    catch(err){
next(error);
    }
}