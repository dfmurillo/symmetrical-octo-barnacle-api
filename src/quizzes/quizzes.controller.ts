import { Request, Response } from "express";
import QuizzesService from "./quizzes.service";

class QuizzesController {
    private static instance: QuizzesController;

    static getInstance(): QuizzesController {
        if (!QuizzesController.instance) {
            QuizzesController.instance = new QuizzesController();
        }
        return QuizzesController.instance;
    }

    listQuizzes(request: Request, response: Response) {
      try {
        const quizzes = QuizzesService.getAllQuizzes();
        response.statusCode = 200;
        response.json({ quizzes });
      } catch(error) {
        response.statusCode = 404;
        response.json({ error });
      }
    }

    getQuizById(request: Request, response: Response) {
      try {
        const quiz = QuizzesService.getQuizById(parseInt(request.params.quizId, 10));
        response.statusCode = 200;
        response.json({ quiz });
      } catch(error) {
        response.statusCode = 404;
        response.json({ error });
      }
    }
}

export default QuizzesController.getInstance();