export type ServerError = {
    success: boolean;
    message: string;
}

export type QuizzesType = {
    success: boolean;
    quizzes: QuizData[];
}

export type QuizData =  {
    _id: string;
    quizName: string;
    noOfQuestions: number;
    logo: string;
    quiz: QuestionAndAnswersType[]
}

export type QuestionAndAnswersType = {
    _id: string;
    question: string;
    points: number;
    options: Option[];
}

export type Option = {
    _id: string;
    answer: string;
    isRight: boolean;
}


export type InitialStateType = {
    finalScore: number;
    quizData: QuizData[] | null;
    questionNo: number;
    currentQuestion: QuestionAndAnswersType | null;
}

export type ActionType =
| { type: "ADD_QUIZZES", payload: QuizData[] }
| { type: "ADD_CURRENT_QUESTION", payload: QuestionAndAnswersType }
| { type: "CHANGE_SCORE", payload: { points: number, isRight: boolean }}
| { type: "RESET" }
| { type: "INCREMENT" }
