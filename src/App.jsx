// src/App.jsx
import React, { useState } from 'react';
import LandingPage from './Pages/LandingPage';
import QuizPage from './Pages/QuizPage';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <>
      {quizStarted ? (
        <QuizPage />
      ) : (
        <LandingPage onStartQuiz={() => setQuizStarted(true)} />
      )}
    </>
  );
}

export default App;
