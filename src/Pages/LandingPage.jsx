// src/Pages/LandingPage.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function LandingPage({ onStartQuiz }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        // maxWidth:'100vw',
        width:'100vw',
        background: 'linear-gradient(135deg, #A9D1F7 0%, #D0E6FF 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#2D3251',
          color: '#FFFFFF',
          width: '400px',
          padding: '2rem',
          borderRadius: '8px',
          textAlign: 'center',
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
          sx={{ marginTop: '1rem' }}
        >
          START
        </Button>
      </Box>
    </Box>
  );
}

export default LandingPage;
