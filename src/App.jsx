// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import QuizPage from './Pages/QuizPage';
import ScoreCard from './Components/ScoreCard';
import QuizHistory from './Components/QuizHistory';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/scorecard" element={<ScoreCard />} />
      <Route path="/history" element={<QuizHistory />} />
    </Routes>
  );
}

export default App;
