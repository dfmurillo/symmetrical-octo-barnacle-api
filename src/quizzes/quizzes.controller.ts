import { Request, Response } from "express";
class QuizzesController {
    private static instance: QuizzesController;

    static getInstance(): QuizzesController {
        if (!QuizzesController.instance) {
            QuizzesController.instance = new QuizzesController();
        }
        return QuizzesController.instance;
    }

    listQuizzes(req: Request, response: Response) {
      response.statusCode = 200;
      response.json({ success: true });
    }

    getQuizById(req: Request, response: Response) {
      response.statusCode = 200;
      response.json({ success: true, quiz: req.params.quizId });
    }
}

export default QuizzesController.getInstance();