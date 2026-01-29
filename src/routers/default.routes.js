import { Router } from "express";
import * as wineCtl from "../controllers/wine.controller.js"

const router = Router();

router.get("/wines", wineCtl.getAllWines);
router.get("/wines/:id", wineCtl.getWineById);
router.post("/wines", wineCtl.createWine);

export default router;