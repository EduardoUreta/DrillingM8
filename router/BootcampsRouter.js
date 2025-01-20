import { Router } from "express";
import { BootcampController } from "../controllers/index.js";
import { AuthMiddleware } from "../middlewares/index.js";

export const BootcampsRouter = Router();

BootcampsRouter.get("/", BootcampController.findAll);
BootcampsRouter.get("/:id", AuthMiddleware, BootcampController.findById);
BootcampsRouter.post("/", AuthMiddleware, BootcampController.create);
BootcampsRouter.post("/add-user", AuthMiddleware, BootcampController.addUser);
