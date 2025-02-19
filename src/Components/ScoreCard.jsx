// src/Components/ScoreCard.jsx
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { saveQuizHistory } from '../utils/indexedDB';

const ScoreCard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { quizData, userAnswers } = location.state || {};

  if (!quizData || !userAnswers) {
    return (
      <Box sx={{ textAlign: 'center', padding: '2rem' }}>
        <Typography variant="h6">No quiz data found.</Typography>
        <Button variant="contained" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </Box>
    );
  }

  // Calculate the score
  const score = quizData.reduce((acc, question, idx) => {
    const userAnswer = userAnswers[idx];
    if (question.type === 'mcq') {
      if (userAnswer === question.correctIndex) return acc + 1;
    } else {
      if (parseInt(userAnswer, 10) === question.correctAnswer) return acc + 1;
    }
    return acc;
  }, 0);

  // Save quiz attempt to IndexedDB when component mounts
  useEffect(() => {
    const quizAttempt = {
      date: new Date().toISOString(),
      score,
      total: quizData.length,
      quizData,      // optionally save questions
      userAnswers,   // and user's responses
    };
    saveQuizHistory(quizAttempt);
  }, [score, quizData, userAnswers]);

  return (
    <Box sx={{ textAlign: 'center', color: '#fff', marginTop: '2rem', padding: '2rem', background: 'linear-gradient(135deg, #A9D1F7 0%, #D0E6FF 100%)',width:'100vw' }}>
      <Typography variant="h4"sx={{color:'#7B1FA2'}} gutterBottom>
        Quiz Completed!
      </Typography>
      <Typography variant="h5" sx={{color:'#7B1FA2'}} gutterBottom>
        Score: {score} / {quizData.length}
      </Typography>
      
      {quizData.map((question, idx) => {
        const userAnswer = userAnswers[idx];
        let isCorrect = false;
        let userAnswerDisplay = "";
        let correctAnswerDisplay = "";

        if (question.type === 'mcq') {
          userAnswerDisplay =
            userAnswer !== null && userAnswer !== undefined
              ? question.options[userAnswer]
              : "No answer";
          correctAnswerDisplay = question.options[question.correctIndex];
          isCorrect = userAnswer === question.correctIndex;
        } else {
          userAnswerDisplay = userAnswer !== "" ? userAnswer : "No answer";
          correctAnswerDisplay = question.correctAnswer;
          isCorrect = parseInt(userAnswer, 10) === question.correctAnswer;
        }

        return (
          <Box
            key={idx}
            sx={{
              textAlign: 'left',
            //   backgroundColor: 'rgba(0, 0, 0, 0.2)',
            backgroundColor: '#2D3251',
              borderRadius: '8px',
              padding: '1rem',
              margin: '1rem auto',
              maxWidth: '800px',
            }}
          >
            <Typography variant="subtitle1">
              Q{idx + 1}: {question.question}
            </Typography>
            <Typography variant="body2">
              Your Answer: {userAnswerDisplay}
            </Typography>
            <Typography variant="body2">
              Correct Answer: {correctAnswerDisplay}
            </Typography>
            <Typography variant="body2" color={isCorrect ? 'lightgreen' : 'red'}>
              {isCorrect ? "Correct" : "Incorrect"}
            </Typography>
          </Box>
        );
      })}

      <Button variant="contained" sx={{backgroundColor:'#7B1FA2'}} onClick={() => navigate('/')}>
        Back to Home
      </Button>
    </Box>
  );
};

export default ScoreCard;
