import QuizzesController from "./quizzes.controller";
import QuizzesMiddleware from "./quizzes.middleware";
import { CommonRoutesConfig } from "../common/common.routes.config";
import { Application } from "express";

export class QuizzesRoutes extends CommonRoutesConfig {
    constructor(app: Application) {
        super(app, "QuizzesRoutes");
    }
    configureRoutes(): Application {
        this.app.route("/quizzes")
            .get(QuizzesController.listQuizzes);

        this.app.route("/quizzes/:quizId")
            .all(QuizzesMiddleware.isQuizIdNumeric)
            .get(QuizzesController.getQuizById);

        return this.app;
    }
}