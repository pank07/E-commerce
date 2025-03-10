export const registerUser = (req, res) => {
    res.send('User registered successfully');
};
import User from '../model/userModel.js';
import asyncHandler from '../midddlewares/asyncHandler.js';
const createUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        throw new Error("please fill all the inputs")
    }
    const userExists = await User.findOne({ email })
    if (userExists) res.status(400).send("User Already existed");
    const newUser = new User({ username, email, password })
    try {
        await newUser.save()
        res.status(201).send({ _id: newUser._id,
             username: newUser.username, 
             email: newUser.email, 
             isAdmin: newUser.isAdmin })
    } catch (error) {
        res.status(400) throw  new Error("Invalid user data")
    }
});
export { createUser };
