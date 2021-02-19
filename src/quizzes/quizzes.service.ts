import AllQuizzes from "../db/quizzes.db";
import QuizId1 from "../db/quiz.id1.db";
import { IQuizzes } from "../db/quizzes.interface";
import { IQuiz } from "../db/quiz.id1.interface";

interface IMockQuizObject {
  quizIdMock: number,
  quizResponse: IQuiz
}
class QuizzesService {
    private static instance: QuizzesService;
    private includedQuizzes: IMockQuizObject[];

    constructor() {
      this.includedQuizzes = [{
        quizIdMock: 1,
        quizResponse: QuizId1
      }];
    }
    static getInstance(): QuizzesService {
        if (!QuizzesService.instance) {
            QuizzesService.instance = new QuizzesService();
        }
        return QuizzesService.instance;
    }

    getAllQuizzes(): IQuizzes {
      return AllQuizzes;
    }

    getQuizById(quizId: number): IQuiz {
      const quizToReturn = this.includedQuizzes.filter(
        ({ quizIdMock }) => quizIdMock === quizId
      );
      return quizToReturn[0].quizResponse;
    }
}

export default QuizzesService.getInstance();