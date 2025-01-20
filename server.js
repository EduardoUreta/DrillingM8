import express from "express";
import { BootcampsRouter, SessionsRouter, UsersRouter } from "./router/index.js";
import { errorHandler } from "./middlewares/Errors.js";
import cookieParser from "cookie-parser";

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());

app.use("/api/user", UsersRouter);
app.use("/api/bootcamp", BootcampsRouter);
app.use("/api", SessionsRouter);

app.use(errorHandler);

app.listen(port, () => {
    console.log("Servidor en puerto:", port);
});
