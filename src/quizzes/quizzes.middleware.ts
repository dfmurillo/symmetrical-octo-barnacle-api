import { Request, Response, NextFunction } from "express";

class QuizzesMiddleware {
    private static instance: QuizzesMiddleware;

    static getInstance():  QuizzesMiddleware {
        if (!QuizzesMiddleware.instance) {
            QuizzesMiddleware.instance = new QuizzesMiddleware();
        }
        return QuizzesMiddleware.instance;
    }
    isQuizIdNumeric(request: Request, response: Response, next: NextFunction): void {
      if (Number.isInteger(parseInt(request.params.quizId, 10))) {
        next();
      } else {
        response.statusCode = 400;
        response.json({error: "Invalid quiz"});
      }
    }
}

export default QuizzesMiddleware.getInstance();