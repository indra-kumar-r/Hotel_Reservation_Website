import { Router } from "express";
import * as controller from "../controllers/controller.js";

const router = Router();

router.post("/reservation", controller.p_reservation);

export default router;
