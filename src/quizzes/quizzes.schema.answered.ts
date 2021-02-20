import * as Joi from "joi";
import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import { IQuizBody } from "./quizzes.interface";

export interface IAnsweredSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: IQuizBody
}

const questionAnsweredSchema = Joi.object().keys({
  questionId: Joi.number().required(),
  answers: Joi.array().items(Joi.number()).required()
});

export const answeredSchema = Joi.object().keys({
  quizId: Joi.number().required(),
  questions: Joi.array().items(questionAnsweredSchema).required()
});