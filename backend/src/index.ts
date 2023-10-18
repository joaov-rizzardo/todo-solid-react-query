import express from "express";
import cors from "cors";
import connect from "./lib/mongoose/mongoose-connection";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000, async () => {
  await connect();
  console.log("Api is running on port 3000");
});
