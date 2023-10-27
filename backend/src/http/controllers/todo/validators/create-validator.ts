import { body } from "express-validator";

export const createValidator = [
  body("name")
    .isString()
    .notEmpty()
    .withMessage("Required field name cannot be empty"),
  body("description")
    .isString()
    .notEmpty()
    .withMessage("Required field description cannot be empty"),
];
