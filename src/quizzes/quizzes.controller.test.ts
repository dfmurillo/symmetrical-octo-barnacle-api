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
  
  describe("listQuizzes", () => {
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
  
      MockedQuizzesService.getAllQuizzes.mockReturnValue(quizzes);
  
      const expectedResponse = {
        quizzes
      };
      QuizzesController.listQuizzes(mockRequest as Request, mockResponse as Response);
      expect(mockResponse.json).toBeCalledWith(expectedResponse);
    });

    it("Given there are no quizzes to show, when calling listQuizzes controller, then error is answered", () => {
      MockedQuizzesService.getAllQuizzes.mockImplementation(() => {
        throw new Error("Oops I did it again!");
      });

      QuizzesController.listQuizzes(mockRequest as Request, mockResponse as Response);
      expect(mockResponse.json).toBeCalledWith({error: "Oops I did it again!"});
    });
  });

  describe("getQuizById", () => {
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
  
      MockedQuizzesService.getQuizById.mockReturnValue(quiz);
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
 
      it("Given we want to get a quiz that dont exist, when calling getQuizById controller, then error is answered", () => {
        MockedQuizzesService.getQuizById.mockImplementation(() => {
          throw new Error("Oops I did it again!");
        });
  
        mockRequest = {
          params: {
            quizId: "99"
          }
        };

        QuizzesController.getQuizById(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.json).toBeCalledWith({error: "Oops I did it again!"});
      });
  });

  describe("validateQuiz", () => {
    it("Given we want to validate an existent quiz, when we call validateQuiz, then the value will be returned", () => {
      MockedQuizzesService.validateQuizAnswers.mockReturnValue(80);
  
      mockRequest = {
        body: {
          quizId: "11"
        }
      };

      QuizzesController.validateQuiz(mockRequest as Request, mockResponse as Response);
      expect(mockResponse.json).toBeCalledWith({quizResult: 80});
    });

    it("Given we validate a quiz that dont exist, when calling validateQuiz, then we return the error", () => {
      MockedQuizzesService.validateQuizAnswers.mockImplementation(() => {
        throw new Error("Oops I did it again!");
      });

      mockRequest = {
        body: {
          quizId: "11"
        }
      };
      QuizzesController.validateQuiz(mockRequest as Request, mockResponse as Response);
      expect(mockResponse.json).toBeCalledWith({error: "Oops I did it again!"});
    });
  });

});