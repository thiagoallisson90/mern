import express from "express";
import cors from "cors";
import userRouter from "./src/routes/UserRoutes.js";
import connectDatabase from "./src/database/db.js";

const app = express();
const port = 3000;

connectDatabase();

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
