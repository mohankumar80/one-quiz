import axios, { AxiosError } from "axios";
import { QuizzesType, ServerError } from '../context/data-context.types';

export const getQuizzes = async (): Promise<QuizzesType | ServerError> => {
    try {
     const response = await axios.get<QuizzesType>('https://one-quiz-backend.herokuapp.com/quizzes');
     return response.data;
    } catch (error) {
     if(axios.isAxiosError(error)) {
       const serverError = error as AxiosError<ServerError>;
       if(serverError && serverError.response) {
         return serverError.response.data;
       }
     }
     console.log(error);
     return { success: false, message: 'Oops!! something went wrong.' }
    }
}