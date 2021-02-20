export interface IQuestionAnswersBody {
  questionId: number
    answers: Array<number>
}

export interface IQuizBody {
  quizId: number
  questions: IQuestionAnswersBody[]
}