import React from 'react';
import StartPage from './Pages/LandingPage';

function App() {
  const handleQuizStart = (timeInSeconds) => {
    console.log("Quiz starting with total time:", timeInSeconds);
    // You can navigate to the quiz page or set quiz state here
  };

  return (
    <div style={{ background: '#a0d2eb', height: '100vh', padding: '2rem',width:'100vw' }}>
      <StartPage onStart={handleQuizStart} />
    </div>
  );
}

export default App;
