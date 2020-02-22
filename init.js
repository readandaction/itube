import app from "./app";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const PORT = 4000;

const listening = () => {
  console.log(`Listening https://localhost${PORT}`);
};

app.listen(PORT, listening);
app.use(routes.home, globalRouter);
