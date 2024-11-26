import express from "express";
import cors from "cors";

import userRouter from "./src/routes/UserRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRouter);

app.listen(3000, () => {
  console.log("Server running in port 3000");
});
