import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import lusca from "lusca";
import { CommonRoutesConfig } from "./common/common.routes.config";
import { QuizzesRoutes } from "./quizzes/quizzes.routes.config";

// Create Express server
const app: express.Application = express();
const port = 3000;
const routes: Array<CommonRoutesConfig> = [];

// Express configuration
app.set("port", process.env.PORT || port);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

/**
 * Add the routes we need
 */
routes.push(new QuizzesRoutes(app));

/**
 * Added health status routes, useful to check if our service is running
 */
app.get("/status", (req: express.Request, res: express.Response) => {
    res.status(200).send("Server running");
});
app.head("/status", (req: express.Request, res: express.Response) => {
    res.status(200).end();
});

export default app;
