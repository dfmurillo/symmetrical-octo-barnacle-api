import { Request, Response } from "express";
class QuizzesController {
    private static instance: QuizzesController;

    static getInstance(): QuizzesController {
        if (!QuizzesController.instance) {
            QuizzesController.instance = new QuizzesController();
        }
        return QuizzesController.instance;
    }

    listQuizzes(req: Request, res: Response) {
        res.status(200).send({ success: true });
    }
}

export default QuizzesController.getInstance();