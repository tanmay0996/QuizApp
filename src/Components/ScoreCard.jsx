// src/Components/ScoreCard.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const ScoreCard = ({ quizData, userAnswers }) => {
  // Calculate score based on the quiz data and user responses
  const score = quizData.reduce((acc, question, idx) => {
    const userAnswer = userAnswers[idx];
    if (question.type === 'mcq') {
      if (userAnswer === question.correctIndex) return acc + 1;
    } else {
      if (parseInt(userAnswer, 10) === question.correctAnswer) return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <Box sx={{ textAlign: 'center', color: '#fff', marginTop: '2rem', padding: '2rem' ,width:'100vw',background: 'linear-gradient(135deg, #A9D1F7 0%, #D0E6FF 100%)',}}>
      <Typography variant="h4" gutterBottom>
        Quiz Completed!
      </Typography>
      <Typography variant="h5" gutterBottom>
        Score: {score} / {quizData.length}
      </Typography>

      {/* Detailed breakdown */}
      {quizData.map((question, idx) => {
        const userAnswer = userAnswers[idx];
        let isCorrect = false;
        if (question.type === 'mcq') {
          isCorrect = userAnswer === question.correctIndex;
        } else {
          isCorrect = parseInt(userAnswer, 10) === question.correctAnswer;
        }

        return (
          <Box
            key={question.id}
            sx={{
              textAlign: 'left',
            //   backgroundColor: 'rgba(0, 0, 0, 0.2)',
            // backgroundColor:'red',
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
            {question.type === 'mcq' ? (
              <>
                <Typography variant="body2">
                  Your Answer:{' '}
                  {userAnswer !== null ? question.options[userAnswer] : 'No answer'}
                </Typography>
                <Typography variant="body2">
                  Correct Answer: {question.options[question.correctIndex]}
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="body2">
                  Your Answer: {userAnswer || 'No answer'}
                </Typography>
                <Typography variant="body2">
                  Correct Answer: {question.correctAnswer}
                </Typography>
              </>
            )}
            <Typography variant="body2" color={isCorrect ? 'lightgreen' : 'red'}>
              {isCorrect ? 'Correct' : 'Incorrect'}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default ScoreCard;
