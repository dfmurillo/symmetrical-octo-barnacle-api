import { IQuiz } from "./quiz.id1.db.interface";

const Quiz1: IQuiz = {
    "name": "Zombie quiz 🧟‍♂️",
    "questions": [
        {
            "questionId": 1,
            "question": "Which of the following are ways living humans can be infected by zombies?",
            "answerType": "multiple",
            "answers": [
                {
                    "answerId": 1,
                    "answer": "Zombie bite"
                },
                {
                    "answerId": 2,
                    "answer": "Ingesting zombie flesh"
                },
                {
                    "answerId": 3,
                    "answer": "Brushing open wounds against zombies"
                },
                {
                    "answerId": 4,
                    "answer": "Talking to a Zombie"
                }
            ]
        },
        {
            "questionId": 2,
            "question": "In “The Walking Dead”, what do the survivors theorize most attracts walkers to humans?",
            "answerType": "single",
            "answers": [
                {
                    "answerId": 1,
                    "answer": "Heat"
                },
                {
                    "answerId": 2,
                    "answer": "Movement"
                },
                {
                    "answerId": 3,
                    "answer": "Smell"
                },
                {
                    "answerId": 4,
                    "answer": "Sound"
                }
            ]
        },
        {
            "questionId": 3,
            "question": "What is the first thing you must do after the dead have begun to walk the earth?",
            "answerType": "single",
            "answers": [
                {
                    "answerId": 1,
                    "answer": "Address wounds and injuries"
                },
                {
                    "answerId": 2,
                    "answer": "Find water"
                },
                {
                    "answerId": 3,
                    "answer": "Remain calm, as paralyzing fear or panic means death"
                },
                {
                    "answerId": 4,
                    "answer": "Find other survivors"
                }
            ]
        },
        {
            "questionId": 4,
            "question": "True or False: Zombies can sense pain, but have a high tolerance for it.",
            "answerType": "single",
            "answers": [
                {
                    "answerId": 1,
                    "answer": "True"
                },
                {
                    "answerId": 2,
                    "answer": "False"
                }
            ]
        },
        {
            "questionId": 5,
            "question": "Which of the following is bad advice to follow if you are in an urban area during a zombie infestation?",
            "answerType": "single",
            "answers": [
                {
                    "answerId": 1,
                    "answer": "Remain above ground"
                },
                {
                    "answerId": 2,
                    "answer": "Enter by dawn, leave by dusk"
                },
                {
                    "answerId": 3,
                    "answer": "Always use four-wheeled vehicles."
                },
                {
                    "answerId": 4,
                    "answer": "Know the area"
                }
            ]
        }
    ]
};

export default Quiz1;