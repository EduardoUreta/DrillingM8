import { Router } from "express";
import { SessionsController } from "../controllers/index.js";

export const SessionsRouter = Router();

SessionsRouter.post("/signup", SessionsController.register);
SessionsRouter.post("/signin", SessionsController.login);
SessionsRouter.delete("/logout", SessionsController.logout);
