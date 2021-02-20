export interface IQuizAnswers {
  questionId: number
  correctAnswers: number[]
}

export interface IQuizAnswersObject {
  quizId: number,
  answers: IQuizAnswers[]
}