import QuizzesController from "./quizzes.controller";
import { Request, Response } from "express";

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
    const expectedResponse = {
      success:  true 
    };
    QuizzesController.listQuizzes(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.json).toBeCalledWith(expectedResponse);
  });

  it("Given we want to get a quiz by id, when calling getQuizById controller, then success is answered", () => {
    const quizIdToGet = "44";
    mockRequest = {
      params: {
        quizId: quizIdToGet
      }
    };
    const expectedResponse = {
      success:  true,
      quiz: quizIdToGet
    };
    QuizzesController.getQuizById(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.json).toBeCalledWith(expectedResponse);
  });

  
});