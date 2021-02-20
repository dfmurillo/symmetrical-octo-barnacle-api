import AllQuizzes from "../db/quizzes.db";
import QuizId1 from "../db/quiz.id1.db";
import QuizAnswers1 from "../db/quiz.answers.id1.db";
import { IQuizzes } from "../db/quizzes.db.interface";
import { IQuiz, IMockQuizObject } from "../db/quiz.id1.db.interface";
import { IQuestionAnswersBody } from "./quizzes.interface";
import { IQuizAnswersObject } from "../db/quiz.answers.id1.db.interface";

class QuizzesService {
    private static instance: QuizzesService;
    private includedQuizzes: IMockQuizObject[];
    private answerToQuizzes: IQuizAnswersObject[];

    constructor() {
      this.includedQuizzes = [{
        quizIdMock: 1,
        quizResponse: QuizId1
      }];

      this.answerToQuizzes = [{
        quizId: 1,
        answers: QuizAnswers1
      }];
    }
    static getInstance(): QuizzesService {
        if (!QuizzesService.instance) {
            QuizzesService.instance = new QuizzesService();
        }
        return QuizzesService.instance;
    }

    /**
     * Service created to get all the Quizzes
     */
    getAllQuizzes(): IQuizzes {
      return AllQuizzes;
    }

    /**
     * Given a quiz Id the function filters the desired quiz from the all quiz array
     * @param quizId 
     */
    getQuizById(quizId: number): IQuiz {
      const quizToReturn = this.includedQuizzes.filter(
        ({ quizIdMock }) => quizIdMock === quizId
      );

      if (quizToReturn.length < 1) {
        throw new Error(`Quiz ${quizId} don't exist`);
      }
      
      return quizToReturn[0].quizResponse;
    }

    validateQuizAnswers(quizId: number, questions: IQuestionAnswersBody[]) {

    }
}

export default QuizzesService.getInstance();