import dotenv from "dotenv";
import app from "./server";
import connectDB from "./config/db";

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to DB, then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});