import DataManager from "../db/data.manager";
import { IQuizzes } from "../db/quizzes.db.interface";
import { IQuiz } from "../db/quiz.id1.db.interface";
import { IQuestionAnswersBody } from "./quizzes.interface";

class QuizzesService {
    private static instance: QuizzesService;

    private MAXIMUM_SCORE = 100;

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
      return DataManager.getAllQuizzes();
    }

    /**
     * Given a quiz Id the function filters the desired quiz from the all quiz array
     * @param quizId 
     */
    getQuizById(quizId: number): IQuiz {
      const quizToReturn = DataManager.getQuizById(quizId);

      if (quizToReturn.length < 1) {
        throw new Error(`Quiz ${quizId} don't exist`);
      }
      
      return quizToReturn[0].quizResponse;
    }

    validateQuizAnswers(quizId: number, questions: IQuestionAnswersBody[]) {
      const quizToCheck = DataManager.getQuizAnswers(quizId);

      if (quizToCheck.length < 1) {
        throw new Error(`Quiz ${quizId} don't exist`);
      }
      
      const solvedQuiz = quizToCheck[0].quizAnswers;
      const valueToAccumulateOnCorrectAnswer = this.MAXIMUM_SCORE / solvedQuiz.length;

      return questions.reduce(
        (accumulator, currentQuestion, index) => JSON.stringify(solvedQuiz[index]) === JSON.stringify(currentQuestion) 
          ? accumulator + valueToAccumulateOnCorrectAnswer
          : accumulator 
        , 0);
    }
}

export default QuizzesService.getInstance();