import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import { Navigation, Home, Quiz, QuestionAndAnswers, Results, Notfound } from './components/index';
import { getQuizzes } from './utils/getQuizzes';
import { ServerError } from './context/data-context.types';
import { useData } from "./context/data-context";

export default function App() {

  const { dispatch } = useData();
  const [error, setError] = useState<ServerError | null>(null);

  useEffect(() => {
    (async() => {
      const data = await getQuizzes();
      if("quizzes" in data) {
        return dispatch({ type: 'ADD_QUIZZES', payload: data.quizzes });
      } setError(data)
    })()
  }, [dispatch])

  return (
    <div className="App">
      <Navigation />
      { error && <h3>{error.message}</h3> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes"  element={<Quiz />} />
        <Route path="/play/quiz/:quizId" element={<QuestionAndAnswers />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}
