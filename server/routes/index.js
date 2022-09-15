import express from "express";
import { createUser, getUserByUsername } from "../controllers/Users.js"

const router = express.Router()

router.post('/', createUser);
router.get('/:username', getUserByUsername);

export default router;