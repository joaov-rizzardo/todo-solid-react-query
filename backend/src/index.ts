import express from "express";
import cors from "cors";
import connect from "./lib/mongoose/mongoose-connection";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", router);

const port = 8000;
app.listen(port, async () => {
  await connect();
  console.log(`Api is running on port ${port}`);
});
