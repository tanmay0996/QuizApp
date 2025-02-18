import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

function StartPage({ onStart }) {
  // State for minute and second inputs
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  const handleStart = () => {
    // Convert total time to seconds, pass to parent or handle logic
    const totalTimeInSeconds = minutes * 60 + seconds;
    if (onStart) {
      onStart(totalTimeInSeconds);
    } else {
      alert(`Starting quiz with ${minutes} minute(s) and ${seconds} second(s).`);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#2D3251',  // Example background color
        color: '#FFFFFF',
        width: '500px',
        padding: '2rem',
        borderRadius: '8px',
        textAlign: 'center',
        margin: '2rem auto',         // Center horizontally with margin
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Start the Quiz
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Good luck!
      </Typography>

      <Typography variant="body2" gutterBottom>
        Time: 60sec (example placeholder)
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        <TextField
          label="Minutes"
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
          variant="outlined"
          sx={{ width: '80px' }}
          inputProps={{ min: 0 }}
        />
        <TextField
          label="Seconds"
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(Number(e.target.value))}
          variant="outlined"
          sx={{ width: '80px' }}
          inputProps={{ min: 0, max: 59 }}
        />
      </Box>

      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handleStart}
      >
        START
      </Button>
    </Box>
  );
}

export default StartPage;
