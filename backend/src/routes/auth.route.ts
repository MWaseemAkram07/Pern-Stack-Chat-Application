import express from "express";
const router = express.Router();
import { logIn, signUp, logOut } from "../controllers/auth.controller.js"

router.get('/login', logIn);

router.get('/logout', logOut);

router.get('/signup', signUp);

export default router;