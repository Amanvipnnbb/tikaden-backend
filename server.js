import express from "express";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

app.get("/", (req,res)=> res.send("Tikaden backend running"));

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log("Server running on port", port));
