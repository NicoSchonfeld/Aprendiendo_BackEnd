import "dotenv/config";
import express from "express";

// importar archivos con .js
import "./database/connectDB.js";
import AuthRouter from "./routers/auth.route.js";

const app = express();
const PORT = process.env.PORT || 4500;

app.use(express.json());
app.use("/api/v1", AuthRouter);

app.listen(PORT, () => {
  console.log(`👍👍👍 ${PORT}`);
});
