import express from "express";
import { signup, signin } from "../controller/auth.controller.js"; // ✅ Import signin

const router = express.Router();

router.post("/signup", signup); 
router.post("/signin", signin);  // ✅ Now signin is defined

export default router;
