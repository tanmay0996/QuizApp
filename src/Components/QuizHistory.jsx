// src/Components/QuizHistory.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { getQuizHistory } from '../utils/indexedDB';

const QuizHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const savedHistory = await getQuizHistory();
      console.log('Fetched quiz history:', savedHistory);
      setHistory(savedHistory);
    };
    fetchHistory();
  }, []);

  return (
    <Box
      sx={{
        padding: '2rem',
        width: '100vw',
        background: 'linear-gradient(135deg, #A9D1F7 0%, #D0E6FF 100%)'
      }}
    >
      <Typography variant="h4" sx={{ color: '#7B1FA2' }} gutterBottom>
        Quiz History
      </Typography>
      {[...history]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((attempt) => (
          <Box
            key={attempt.id}
            sx={{
              backgroundColor: '#2D3251',
              margin: '1rem 0',
              padding: '1rem',
              borderRadius: '8px',
              marginRight: '20%'
            }}
          >
            <Typography variant="subtitle1">
              Date: {new Date(attempt.date).toLocaleString()}
            </Typography>
            <Typography variant="body1" sx={{ color: 'secondary' }}>
              Score: {attempt.score} / {attempt.total}
            </Typography>
          </Box>
        ))}
    </Box>
  );
};

export default QuizHistory;
