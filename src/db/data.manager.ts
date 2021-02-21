import AllQuizzes from "../db/quizzes.db";
import QuizId1 from "../db/quiz.id1.db";
import QuizAnswers1 from "../db/quiz.answers.id1.db";
import { IQuizzes } from "../db/quizzes.db.interface";
import { IMockQuizObject } from "../db/quiz.id1.db.interface";
import { IQuizAnswersObject } from "../db/quiz.answers.id1.db.interface";

class DataManager {
  
  private static instance: DataManager;

    static getInstance(): DataManager {
        if (!DataManager.instance) {
            DataManager.instance = new DataManager();
        }
        return DataManager.instance;
    }

    getAllQuizzes(): IQuizzes {
      return AllQuizzes;
    }

    getQuizById(quizId: number): IMockQuizObject[] {
      const quizzes: IMockQuizObject[] = [{
        quizIdMock: 1,
        quizResponse: QuizId1
      }];

      return quizzes.filter(
        ({ quizIdMock }) => quizIdMock === quizId
      );
    }

    getQuizAnswers(quizId: number): IQuizAnswersObject[] {
      const answerToQuizzes: IQuizAnswersObject[] = [{
        quizIdMock: 1,
        quizAnswers: QuizAnswers1
      }];

      return answerToQuizzes.filter(
        ({ quizIdMock }) => quizIdMock === quizId
      );
    }
}

export default DataManager.getInstance();