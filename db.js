import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/itube", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("connected to DB");
const handleError = error => console.log(`Error:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

export default db;
