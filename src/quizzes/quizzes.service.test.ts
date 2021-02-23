import DataManager from "../db/data.manager";
import QuizzesService from "./quizzes.service";
import { IQuiz } from "../db/quiz.id1.db.interface";
import { IQuizAnswers } from "../db/quiz.answers.id1.db.interface";
import { IQuizzes } from "../db/quizzes.db.interface";

jest.mock("../db/data.manager");
const MockedDataManager = DataManager as jest.Mocked<typeof DataManager>;

describe("Test Quizzes service", () => {
  describe("getAllQuizzes", () => {
    it("Given we request all quizzes, when we call getAllQuizzes, then all results are answered", () => {
      const quizzes: IQuizzes = [{
        id: 11,
        name: "Quiz 1",
        isReady: true
      }, {
        id: 22,
        name: "Quiz 2",
        isReady: false
      }, {
        id: 33,
        name: "Quiz 3",
        isReady: true
      }];
      
      MockedDataManager.getAllQuizzes.mockReturnValue(quizzes);
      expect(QuizzesService.getAllQuizzes()).toEqual(quizzes);
    });
  });

  describe("getQuizById", () => {
    it("Given we request the data from an existent quiz, when calling getQuizById, then we get the data from that quiz", () => {
      const myQuiz: IQuiz = {
        name: "That quiz, the one I need",
        questions: [{
          questionId: 11,
          question: "What was the question?",
          answerType: "anotherAnswer",
          answers: [{
            answerId: 12,
            answer: "this"
          }]
        }]
      };
      MockedDataManager.getQuizById.mockReturnValue(
        [{ 
          quizIdMock: 99,
          quizResponse: myQuiz
        }]
      );

      expect(QuizzesService.getQuizById(99)).toEqual(myQuiz);
    });

    it("Given we request data form a quiz that dont exist, when calling getQuizById, then the function raises an error", () => {
      MockedDataManager.getQuizById.mockReturnValue([]);
      expect(() => QuizzesService.getQuizById(99)).toThrow(new Error("Quiz 99 don't exist"));
    });
  });

  describe("validateQuizAnswers", () => {
    it("Given we want to validate a quiz with 5 questions, when we call validateQuizAnswers, then the function should return the percentage over 100", () => {
      const myQuiz: IQuizAnswers[] = [
        {
          "questionId": 1,
          "answers": [
              1,
              2
          ]
        }, {
          "questionId": 2,
          "answers": [
              1
          ]
        }, {
          "questionId": 3,
          "answers": [
              1
          ]
        }, {
          "questionId": 4,
          "answers": [
              1
          ]
        }, {
          "questionId": 5,
          "answers": [
              1
          ]
        }];
      MockedDataManager.getQuizAnswers.mockReturnValue(
        [{
          quizIdMock: 1,
          quizAnswers: myQuiz
        }]
      );

      expect(QuizzesService.validateQuizAnswers(1, myQuiz)).toEqual(100);

      // quiz with one wrong question, so should be 80
      expect(QuizzesService.validateQuizAnswers(1, [
        {
          "questionId": 1,
          "answers": [
              1,
              2
          ]
        }, {
          "questionId": 2,
          "answers": [
              1
          ]
        }, {
          "questionId": 3,
          "answers": [
              1
          ]
        }, {
          "questionId": 4,
          "answers": [
              1
          ]
        }, {
          "questionId": 5,
          "answers": [
              2
          ]
        }])).toEqual(80);

        // quiz with two wrong questions, so should be 60
      expect(QuizzesService.validateQuizAnswers(1, [
        {
          "questionId": 1,
          "answers": [
              1,
              2
          ]
        }, {
          "questionId": 2,
          "answers": [
              1
          ]
        }, {
          "questionId": 3,
          "answers": [
              1
          ]
        }, {
          "questionId": 4,
          "answers": [
              2
          ]
        }, {
          "questionId": 5,
          "answers": [
              2
          ]
        }])).toEqual(60);
    });

    it("Given we try to validate a non existent quiz, when calling validateQuizAnswers, then we throw an error", () => {
      MockedDataManager.getQuizAnswers.mockReturnValue([]);
      expect(() => QuizzesService.validateQuizAnswers(99, [])).toThrow(new Error("Quiz 99 don't exist"));
    });
  });
});