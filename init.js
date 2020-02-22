import app from "./app";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import videosRouter from "./routers/videosRouter";
import usersRouter from "./routers/usersRouter";

const PORT = 4000;

const listening = () => {
  console.log(`Listening https://localhost${PORT}`);
};

app.listen(PORT, listening);
app.use(routes.home, globalRouter);
app.use(routes.videos, videosRouter);
app.use(routes.users, usersRouter);
