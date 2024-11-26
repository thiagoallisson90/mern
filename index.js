import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).res({ msg: "ok" });
});

app.listen(3000, () => {
  console.log("Server running in port 3000");
});
