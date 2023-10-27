import express from "express";
import cors from "cors";
import connect from "./lib/mongoose/mongoose-connection";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(8000, async () => {
  await connect();
  console.log("Api is running on port 3000");
});
