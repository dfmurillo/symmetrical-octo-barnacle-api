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
      const some = QuizzesService.getAllQuizzes();
      console.log("DFM_ ln: 15 __ some", some);
      response.statusCode = 200;
      response.json({ success: true });
    }

    getQuizById(request: Request, response: Response) {
      response.statusCode = 200;
      response.json({ success: true, quiz: request.params.quizId });
    }
}

export default QuizzesController.getInstance();