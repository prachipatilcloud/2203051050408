import express from "express";
import { register } from "../controllers/userController.js";
import log from "../middleware/logger.js";

const router = express.Router();


router.route("/register").post(register);
router.route("/").post(log);

export default router