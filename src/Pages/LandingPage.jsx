// src/Pages/LandingPage.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #A9D1F7 0%, #D0E6FF 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        width:'100vw'
      }}
    >
      <Box
        sx={{
          backgroundColor: '#2D3251',
          color: '#FFFFFF',
          width: '35%',
          padding: '2rem',
          borderRadius: '8px',
          textAlign: 'center',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          marginRight:'8%',
          marginBottom:'15%'
        }}
      >
        
        <Typography variant="h4" gutterBottom>
          Start the Quiz
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Good luck!
        </Typography>
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',gap:5,marginLeft:'10%'}}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/quiz')}
          sx={{ marginTop: '1rem' }}
        >
          START
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => navigate('/history')}
          sx={{ marginTop: '1rem' }}
        >
          View History
        </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;
