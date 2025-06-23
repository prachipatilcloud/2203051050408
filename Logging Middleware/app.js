import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js"

dotenv.config();

const app = express();

// api's
// app.use("/evaluation-service", userRouter)

const port = process.env.PORT || 5000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://20.244.56.144`);
});
