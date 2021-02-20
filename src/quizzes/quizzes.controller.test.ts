import QuizzesController from "./quizzes.controller";
import QuizzesService from "./quizzes.service";
import { Request, Response } from "express";
import { IQuizzes } from "../db/quizzes.db.interface";
import { IQuiz } from "../db/quiz.id1.db.interface";

jest.mock("./quizzes.service");
const MockedQuizzesService = QuizzesService as jest.Mocked<typeof QuizzesService>;

describe("Tests for quizzes middleware", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      json: jest.fn(),
    };
  });
  it("Given we want to get all quizzes, when calling listQuizzes controller, then success is answered", () => {

    const quizzes: IQuizzes = [{
      id: 11,
      name: "Quiz 1"
    }, {
      id: 22,
      name: "Quiz 2"
    }, {
      id: 33,
      name: "Quiz 3"
    }];

    MockedQuizzesService.getAllQuizzes.mockReturnValueOnce(quizzes);

    const expectedResponse = {
      quizzes
    };
    QuizzesController.listQuizzes(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.json).toBeCalledWith(expectedResponse);
  });

  it("Given we want to get a quiz by id, when calling getQuizById controller, then success is answered", () => {
    const quizIdToGet = "44";
    const quiz: IQuiz = {
      name: "My fancy quizz",
      questions: [{
        questionId: 11,
        question: "My fancy question 1",
        answers: [{
          answerId: 12,
          answer: "Fancy Answer 1"
        }]
      }]
    };

    MockedQuizzesService.getQuizById.mockReturnValueOnce(quiz);
    mockRequest = {
      params: {
        quizId: quizIdToGet
      }
    };
    const expectedResponse = {
      quiz
    };

    QuizzesController.getQuizById(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.json).toBeCalledWith(expectedResponse);
  });


});