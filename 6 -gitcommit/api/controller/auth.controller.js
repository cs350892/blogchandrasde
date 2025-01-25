import User from "../user.model.js";
import bcryptjs from "bcryptjs";
import catchAsync from "../utils/catchAsync.js";  // Import the utility function

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
