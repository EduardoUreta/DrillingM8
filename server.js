import express from "express";
import { BootcampsRouter, UsersRouter } from "./router/index.js";
import { errorHandler } from "./middlewares/Errors.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/users", UsersRouter);
app.use("/bootcamps", BootcampsRouter);

app.use(errorHandler);

app.listen(port, () => {
    console.log("Servidor en puerto:", port);
});
