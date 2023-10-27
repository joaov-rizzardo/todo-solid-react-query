import { Request, Response, Router } from "express";
import { createValidator } from "./http/controllers/todo/validators/create-validator";
import { bodyValidator } from "./http/middlewares/body-validator";
import { create } from "./http/controllers/todo/create";
import { updateValidator } from "./http/controllers/todo/validators/update-validator";
import { update } from "./http/controllers/todo/update";
import { findAll } from "./http/controllers/todo/find-all";

const router = Router();

router.all("/", (req: Request, res: Response) => {
  res.status(200).send({ message: "Api is working" });
});

router.post("/todo", createValidator, bodyValidator, create);
router.put("/todo", updateValidator, bodyValidator, update);
router.get("/todo", findAll);

export { router };
