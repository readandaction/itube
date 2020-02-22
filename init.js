import app from "./app";

const PORT = 4000;

const listening = () => {
  console.log(`Listening https://localhost${PORT}`);
};

app.listen(PORT, listening);

app.get("/", (req, res) => res.send("Home"));
app.get("/profile", (req, res) => res.send("Profile"));
