import express from "express";
import authRouter from "./routes/auth";
import cors from "cors";

const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
