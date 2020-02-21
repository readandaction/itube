import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

const PORT = 4000;

const listening = () => {
  console.log(`Listening https://localhost${PORT}`);
};
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("tiny"));

app.listen(PORT, listening);

app.get("/", (req, res) => res.send("Home"));
app.get("/profile", (req, res) => res.send("Profile"));
