import express from "express";
import morgan from "morgan";
import helmet from "helmet";
const app = express();

const PORT = 4000;

const listening = () => {
  console.log(`Listening https://localhost${PORT}`);
};
app.use(helmet());
app.use(morgan("tiny"));

app.listen(PORT, listening);

app.get("/", (req, res) => res.send("Home"));
app.get("/profile", (req, res) => res.send("Profile"));
