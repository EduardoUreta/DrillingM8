import { Router } from "express";
import { UsersController } from "../controllers/index.js";

export const UsersRouter = Router();

UsersRouter.get("/", UsersController.findAll);
UsersRouter.get("/:id", UsersController.findById);
UsersRouter.post("/", UsersController.create);
UsersRouter.put("/:id", UsersController.update);
UsersRouter.delete("/:id", UsersController.delete);
