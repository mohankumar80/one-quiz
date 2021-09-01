import React from 'react'
import { Link } from "react-router-dom";
import { useData } from '../context/data-context'

export default function Quiz() {

    const { state } = useData();

    return <div className="Quiz flex flex-col md:flex-row justify-center items-stretch">
        {
            state.quizData?.map(quiz => {
                return <div key={quiz._id} className="m-8 border border-gray-500 p-2 pb-6 rounded max-w-xs max-h-xs">
                    <img src={quiz.logo} alt={quiz.quizName} className="rounded" />
                    <h3 className="font-bold">quiz: {quiz.quizName}</h3>
                    <p className="mb-4">questions: { quiz.noOfQuestions }</p>
                    <Link to={`/play/quiz/${quiz._id}`} 
                        className="border-2 border-blue-500 px-8 py-2 rounded hover:bg-blue-500 hover:text-white"
                    >
                        Play
                    </Link>
                </div>
            })
        }
    </div>
}
