// src/Pages/QuizPage.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

const questionsData = [
  {
    question: 'Which of the following is the major element in earth crust?',
    options: ['Silicon', 'Oxygen', 'Iron', 'Aluminium'],
    correctIndex: 1,
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctIndex: 1,
  },
];

function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);

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

  const currentQuestion = questionsData[currentQuestionIndex];

  const handleOptionClick = (index) => {
    setSelectedOptionIndex(index);
  };

  const handleNextQuestion = () => {
    setSelectedOptionIndex(null);
    setTimeLeft(30);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  if (currentQuestionIndex >= questionsData.length) {
    return (
      <Box
        sx={{
          textAlign: 'center',
          color: '#fff',
          marginTop: '5rem',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Quiz Completed!
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #A9D1F7 0%, #D0E6FF 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <Box
        sx={{
          width: '800px',              // Increase width to fit question + options side by side
          backgroundColor: '#2D3251',
          borderRadius: '16px',
          color: '#FFFFFF',
          padding: '2rem',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          position: 'relative',
        }}
      >
        {/* Top bar: Question number (left) & Timer (right) */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem',
          }}
        >
          <Typography variant="subtitle1">
            Question {currentQuestionIndex + 1}/{questionsData.length}
          </Typography>
          <Typography variant="h6">{timeLeft}</Typography>
        </Box>

        {/* Main content area: Question on the left, Options on the right */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '2rem',      // Space between question text & options
          }}
        >
          {/* Left side: question text */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" gutterBottom>
              {currentQuestion.question}
            </Typography>
          </Box>

          {/* Right side: options */}
          <Box sx={{ flex: 1 }}>
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedOptionIndex === index;
              return (
                <Button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  sx={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    marginBottom: '1rem',
                    borderRadius: '24px',
                    border: '2px solid #546386',
                    backgroundColor: isSelected ? '#546386' : 'transparent',
                    color: '#FFFFFF',
                    transition: 'background-color 0.2s ease',
                    '&:hover': {
                      backgroundColor: isSelected
                        ? '#546386'
                        : 'rgba(84, 99, 134, 0.3)',
                    },
                  }}
                >
                  {option}
                </Button>
              );
            })}
          </Box>
        </Box>

        {/* Next button (bottom-right) */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
          <Button
            variant="contained"
            onClick={handleNextQuestion}
            sx={{
              backgroundColor: '#9C4DFF',
              borderRadius: '20px',
              padding: '0.5rem 2rem',
              '&:hover': {
                backgroundColor: '#7A3ACC',
              },
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default QuizPage;
