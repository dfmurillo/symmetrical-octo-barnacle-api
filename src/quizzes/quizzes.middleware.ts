import express from "express";

class QuizzesMiddleware {
    private static instance: QuizzesMiddleware;

    static getInstance() {
        if (!QuizzesMiddleware.instance) {
            QuizzesMiddleware.instance = new QuizzesMiddleware();
        }
        return QuizzesMiddleware.instance;
    }
    isQuizIdNumeric(req: express.Request, res: express.Response, next: express.NextFunction) {
      if (Number.isInteger(parseInt(req.params.quizId, 10))) {
        next();
      } else {
        res.status(400).send({error: "Invalid quiz"});
      }
    }
}

export default QuizzesMiddleware.getInstance();