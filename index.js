import express from "express";
import cors from "cors";
import userRouter from "./src/routes/UserRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
