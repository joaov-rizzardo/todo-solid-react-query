import { body } from "express-validator";

export const updateValidator = [
  body("id")
    .isString()
    .notEmpty()
    .withMessage("Required field name cannot be empty"),
  body("name")
    .isString()
    .notEmpty()
    .withMessage("Required field name cannot be empty"),
  body("description")
    .isString()
    .notEmpty()
    .withMessage("Required field description cannot be empty"),
  body("completed")
    .isBoolean()
    .notEmpty()
    .withMessage("Required field completed cannot be empty"),
];
