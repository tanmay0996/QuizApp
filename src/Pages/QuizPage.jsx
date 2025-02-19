// src/Pages/QuizPage.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import quizData from '../data/quiz.json';
import { useNavigate } from 'react-router-dom';

function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [integerAnswer, setIntegerAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);
  const [userAnswers, setUserAnswers] = useState([]);

  const navigate = useNavigate();

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

  const currentQuestion = quizData[currentQuestionIndex];

  const handleOptionClick = (index) => {
    setSelectedOptionIndex(index);
  };

  const handleInputChange = (e) => {
    setIntegerAnswer(e.target.value);
  };

  const handleNextQuestion = () => {
    let answer;
    if (currentQuestion && currentQuestion.type === 'mcq') {
      answer = selectedOptionIndex;
    } else {
      answer = integerAnswer;
    }
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
    // Reset states for next question
    setSelectedOptionIndex(null);
    setIntegerAnswer('');
    setTimeLeft(30);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  // When quiz is complete, navigate to the ScoreCard route
  useEffect(() => {
    if (currentQuestionIndex >= quizData.length) {
      navigate('/scorecard', { state: { quizData, userAnswers } });
    }
  }, [currentQuestionIndex, navigate, userAnswers]);

  // While waiting for navigation, you can return null or a loader
  if (currentQuestionIndex >= quizData.length) {
    return null;
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
          width: '800px',
          backgroundColor: '#2D3251',
          borderRadius: '16px',
          color: '#FFFFFF',
          padding: '2rem',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          position: 'relative',
        }}
      >
        {/* Top bar: Question number & Timer */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem',
          }}
        >
          <Typography variant="subtitle1">
            Question {currentQuestionIndex + 1}/{quizData.length}
          </Typography>
          <Typography variant="h6">{timeLeft}</Typography>
        </Box>

        {/* Main content: Question text on left, Answer area on right */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '2rem',
          }}
        >
          {/* Left side: Question text */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" gutterBottom>
              {currentQuestion.question}
            </Typography>
          </Box>

          {/* Right side: Answer area */}
          <Box sx={{ flex: 1 }}>
            {currentQuestion.type === 'mcq' ? (
              currentQuestion.options.map((option, index) => {
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
              })
            ) : (
              <TextField
                label="Your Answer"
                variant="outlined"
                value={integerAnswer}
                onChange={handleInputChange}
                sx={{
                  input: { color: '#fff' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#546386' },
                    '&:hover fieldset': { borderColor: '#9C4DFF' },
                    '&.Mui-focused fieldset': { borderColor: '#9C4DFF' },
                  },
                  width: '100%',
                }}
              />
            )}
          </Box>
        </Box>

        {/* Next button */}
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
