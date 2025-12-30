//src/validations/book.validation.ts
import { body, param } from "express-validator";

export const createBookValidation = [
  body("title")
    .notEmpty()
    .withMessage("Title is required"),

  body("author")
    .notEmpty()
    .withMessage("Author is required"),

  body("tahun")
    .isInt({ min: 0 })
    .withMessage("Tahun harus berupa angka positif"),

  body("stok")
    .isInt({ min: 0 })
    .withMessage("Stok harus berupa angka positif"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
];

export const updateBookValidation = [
  param("id")
    .isString()
    .withMessage("Invalid book ID"), // uuid is string

  body("title")
    .optional()
    .notEmpty()
    .withMessage("Title cannot be empty"),

  body("author")
    .optional()
    .notEmpty()
    .withMessage("Author cannot be empty"),

  body("tahun")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Tahun harus berupa angka positif"),

  body("stok")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Stok harus berupa angka positif"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
];

export const bookIdValidation = [
  param("id")
    .isString()
    .withMessage("Invalid book ID"),
];
