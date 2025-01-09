import { Router } from "express";
import { BootcampController } from "../controllers/index.js";

export const BootcampsRouter = Router();

BootcampsRouter.get("/", BootcampController.findAll);
BootcampsRouter.get("/:id", BootcampController.findById);
BootcampsRouter.post("/", BootcampController.create);
BootcampsRouter.post("/add-user", BootcampController.addUser);
