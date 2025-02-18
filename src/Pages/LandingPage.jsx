// src/Pages/LandingPage.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function LandingPage({ onStartQuiz }) {
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
      <Typography variant="h4" gutterBottom>
        Start the Quiz
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Good luck!
      </Typography>

      <Button 
        variant="contained" 
        color="secondary"
        onClick={onStartQuiz}
      >
        START
      </Button>
    </Box>
  );
}

export default LandingPage;
