import { Router } from "express";
import get from "../controllers/UserController.js";

const router = Router();
router.get("/", get);

export default router;
