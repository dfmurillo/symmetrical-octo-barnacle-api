interface IAnswer {
  answerId: number
  answer: string
}

interface IQuestion {
  questionId: number
  question: string
  answers: IAnswer[]
}


export interface IQuiz {
  name: string
  questions: IQuestion[]
}
