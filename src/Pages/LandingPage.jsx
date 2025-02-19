import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Particles from '../Components/Particles'; // Adjust the import path

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'relative', // this is the positioning context
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #A9D1F7 0%, #D0E6FF 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      {/* Your Landing Page Content */}
      <Box
        sx={{
          backgroundColor: '#2D3251',
          color: '#FFFFFF',
          width: '35%',
          padding: '2rem',
          borderRadius: '8px',
          textAlign: 'center',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          marginBottom: '15%',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Start the Quiz
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Good luck!
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 5 }}>
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

      {/* Particles overlay on top */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,         // Higher than your content (default z-index is 0)
          pointerEvents: 'none', // Allow clicks to pass through if needed
        }}
      >
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </Box>
    </Box>
  );
}

export default LandingPage;
