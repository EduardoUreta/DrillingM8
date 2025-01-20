import { Router } from "express";
import { UsersController } from "../controllers/index.js";
import { AuthMiddleware } from "../middlewares/index.js";

export const UsersRouter = Router();

UsersRouter.get("/", AuthMiddleware, UsersController.findAll);
UsersRouter.get("/:id", AuthMiddleware, UsersController.findById);
UsersRouter.put("/:id", AuthMiddleware, UsersController.update);
UsersRouter.delete("/:id", AuthMiddleware, UsersController.delete);