import { Router } from "express";
import healthController from "@controllers/healthController";

const router = Router();

router.get('/check', healthController.check);

export default router;