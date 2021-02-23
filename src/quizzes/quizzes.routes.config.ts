import QuizzesController from "./quizzes.controller";
import QuizzesMiddleware from "./quizzes.middleware";
import { CommonRoutesConfig } from "../common/common.routes.config";
import { Application } from "express";
import { answeredSchema } from "./quizzes.schema.answered";
import { createValidator } from "express-joi-validation";

const validator = createValidator();
export class QuizzesRoutes extends CommonRoutesConfig {

    constructor(app: Application) {
        super(app, "QuizzesRoutes");
    }
    configureRoutes(): Application {
        this.app.route("/api/quizzes")
            .get(QuizzesController.listQuizzes);

        this.app.route("/api/quizzes/validate")
            .post(
                validator.body(answeredSchema),
                QuizzesController.validateQuiz
            );

        this.app.route("/api/quizzes/:quizId")
            .all(QuizzesMiddleware.isQuizIdNumeric)
            .get(QuizzesController.getQuizById);

        return this.app;
    }
}