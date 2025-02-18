// src/Pages/QuizPage.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

// Example questions array
const questions = [
  {
    question: 'Which of the following is the major element in earth crust?',
    options: ['Silicon', 'Oxygen', 'Iron', 'Aluminium'],
    answerIndex: 1, // let's assume the correct answer is "Oxygen"
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    answerIndex: 1, // "Mars"
  },
  // Add more questions as needed
];

function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);

  // Countdown timer effect
  useEffect(() => {
    if (timeLeft <= 0) {
      handleNextQuestion();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  // Handle user clicking an option
  const handleOptionClick = (index) => {
    setSelectedOptionIndex(index);
  };

  // Move to the next question (resets timer, etc.)
  const handleNextQuestion = () => {
    setSelectedOptionIndex(null);
    setTimeLeft(30);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  // If we've reached the end of the questions
  if (currentQuestionIndex >= questions.length) {
    return (
      <Box
        sx={{
          backgroundColor: '#2D3251',
          color: '#FFFFFF',
          width: '400px',
          padding: '2rem',
          borderRadius: '8px',
          textAlign: 'center',
          margin: '2rem auto',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Quiz Completed!
        </Typography>
        {/* You can show results or summary here */}
      </Box>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Box
      sx={{
        backgroundColor: '#2D3251',
        color: '#FFFFFF',
        width: '600px',
        padding: '2rem',
        borderRadius: '8px',
        textAlign: 'center',
        margin: '2rem auto',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        position: 'relative',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Question {currentQuestionIndex + 1}/{questions.length}
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        {currentQuestion.question}
      </Typography>

      {/* Timer in the top-right corner */}
      <Typography
        variant="h5"
        sx={{ position: 'absolute', top: '20px', right: '30px' }}
      >
        {timeLeft}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginTop: '2rem',
        }}
      >
        {currentQuestion.options.map((option, index) => (
          <Button
            key={index}
            variant={selectedOptionIndex === index ? 'contained' : 'outlined'}
            color="secondary"
            onClick={() => handleOptionClick(index)}
            sx={{ textAlign: 'left', justifyContent: 'flex-start' }}
          >
            {option}
          </Button>
        ))}
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={handleNextQuestion}
        sx={{ marginTop: '2rem' }}
      >
        Next
      </Button>
    </Box>
  );
}

export default QuizPage;
