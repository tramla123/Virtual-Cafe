import User from "../models/userModel.js";

export const createUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.json({
            "message": "User Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const getUserByUsername = async (req, res) => {
    try {
        const user = await User.findAll({
            where: {
                username: req.params.username
            }
        });
        res.json(user[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}