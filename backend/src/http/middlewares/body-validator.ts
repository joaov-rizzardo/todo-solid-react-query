import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export function bodyValidator(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).send({
    message: "Request contain errors",
    errors: errors.array().map((error) => error.msg),
  });
}
