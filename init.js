import app from "./app";
import dotenv from "dotenv";
import "./db";

const PORT = process.env.PORT || 4000;

const listening = () => {
  console.log(`Listening https://localhost${PORT}`);
};

app.listen(PORT, listening);
