interface IAnswer {
  answerId: number
  answer: string
}

interface IQuestion {
  questionId: number
  question: string
  answers: IAnswer[]
}

export interface IMockQuizObject {
  quizIdMock: number,
  quizResponse: IQuiz
}

export interface IQuiz {
  name: string
  questions: IQuestion[]
}
