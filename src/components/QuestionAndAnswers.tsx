import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useData } from '../context/data-context'

export default function QuestionAndAnswers() {

    const { state: { quizData, questionNo, currentQuestion, finalScore }, dispatch } = useData();
    const { quizId } = useParams();

    const quiz = quizData?.find(quizzes => quizzes._id === quizId)
    const questions = quiz?.quiz;

    const navigate = useNavigate();

    useEffect(() => {
        dispatch({ type: "ADD_CURRENT_QUESTION", payload: questions![questionNo] })
    }, [dispatch, questionNo, questions])

    useEffect(() => {
        setIsSelected(null);
    }, [questionNo])

    const changeStatus = (optionId: string) => {
        setIsSelected(optionId)
    }

    const checkQuiz = () => {
        if(questionNo === questions!.length - 1) {
            return navigate('/results');
        } else {
            dispatch({ type:"INCREMENT" })
        }
    }

    const [ isSelected, setIsSelected ] = useState<string | null >(null)

    return (
        <div className="QandA">
            <div className="flex flex-row justify-center items-stretch">
            {
                currentQuestion &&
                <div className="m-2 p-4 border shadow-lg rounded-lg py-2" key={currentQuestion._id}>
                    <h2 className="my-4 ml-36">
                        Score: <span className="border-2 rounded-full px-4 py-2 shadow-sm font-bold text-2xl">{ finalScore }</span>
                    </h2>
                    <h3 className="font-bold">{ currentQuestion.question }</h3>
                    <p className="text-gray-700 mb-6">points: { currentQuestion.points }</p>
                    {
                        currentQuestion.options.map(option => {
                            return <button key={option._id} 
                                onClick={() => {
                                    changeStatus(option._id)
                                    dispatch({ type: "CHANGE_SCORE", payload: { points: currentQuestion.points, isRight: option.isRight } })
                                }}
                                className="block mx-auto rounded m-2 p-3 text-white w-9/12 hover:bg-blue-700"
                                style={{
                                    background: isSelected
                                    ? isSelected && option.isRight === false
                                        ? "red"
                                        : "green"
                                    : isSelected && option.isRight 
                                        ? "green"
                                        : "blue"
                                    
                                }}
                                disabled={ isSelected ? true : false}
                                >
                                { option.answer }
                            </button>
                        })
                    }
                </div>
            }
            </div>
            <button onClick={() => checkQuiz()} className="bg-gray-500 rounded py-2 px-4 hover:bg-gray-700 hover:text-white"> 
                next 
            </button>
        </div>
    )
}
