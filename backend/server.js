import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import connectToMongoDB from "./database/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incloming requests with JSON payloads (from req.body)

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   // root route http://localhost:5000/
//   res.send("Server is ready!!");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
