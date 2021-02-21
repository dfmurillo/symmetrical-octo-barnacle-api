export interface IQuizAnswers {
  questionId: number
  answers: number[]
}

export interface IQuizAnswersObject {
  quizIdMock: number,
  quizAnswers: IQuizAnswers[]
}