import { Request, Response } from "express";
import QuizzesService from "./quizzes.service";
import { IAnsweredSchema } from "./quizzes.schema.answered";
import { ValidatedRequest } from "express-joi-validation";

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
        response.json({error: error.message});
      }
    }

    getQuizById(request: Request, response: Response) {
      try {
        const quiz = QuizzesService.getQuizById(parseInt(request.params.quizId, 10));
        response.statusCode = 200;
        response.json({ quiz });
      } catch(error) {
        response.statusCode = 404;
        response.json({ error: error.message });
      }
    }

    validateQuiz(request: ValidatedRequest<IAnsweredSchema>, response: Response) {
      try {
        const { quizId, questions } = request.body;
        const quizResult = QuizzesService.validateQuizAnswers(quizId, questions);
        response.statusCode = 200;
        response.json({ quizResult });
      } catch (error) {
        response.statusCode = 500;
        response.json({ error: error.message });
      }
    }
}

export default QuizzesController.getInstance();