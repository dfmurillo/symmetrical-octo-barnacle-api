import QuizzesMiddleware from "./quizzes.middleware";
import { Request, Response, NextFunction } from "express";

describe("Tests for quizzes middleware", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  const nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      json: jest.fn(),
    };
  });

  it("Given a numeric value, when calling isQuizIdNumeric middleware, then should call next function", () => {

    mockRequest = {
      params: {
        quizId: "12"
      }
    };

    QuizzesMiddleware.isQuizIdNumeric(mockRequest as Request, mockResponse as Response, nextFunction);
    expect(nextFunction).toBeCalledTimes(1);
  });

  it("Given a numeric value, when calling isQuizIdNumeric middleware, then should respond with an error", () => {
    mockRequest = {
      params: {
        quizId: "zombies"
      }
    };
    const expectedResponse = {
      error: "Invalid quiz"
    };

    QuizzesMiddleware.isQuizIdNumeric(mockRequest as Request, mockResponse as Response, nextFunction);
    expect(mockResponse.json).toBeCalledWith(expectedResponse);
  });

  it("Given a numeric value, when calling isQuizIdNumeric middleware, then should respond with an error", () => {
    mockRequest = {
      params: {
        quizId: ""
      }
    };
    const expectedResponse = {
      error: "Invalid quiz"
    };

    QuizzesMiddleware.isQuizIdNumeric(mockRequest as Request, mockResponse as Response, nextFunction);
    expect(mockResponse.json).toBeCalledWith(expectedResponse);
  });
});