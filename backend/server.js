import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  // root route http://localhost:5000/
  res.send("Server is ready!!");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
