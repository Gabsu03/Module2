import React, { useState } from 'react';

function App() {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const addPointsToTeamA = (points) => {
    if (points > 0) {
      setTeamAScore(prevScore => prevScore + points);
    }
  };

  const addPointsToTeamB = (points) => {
    if (points > 0) {
      setTeamBScore(prevScore => prevScore + points);
    }
  };

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Basketball Scoring</h1>
      </header>
      <div style={styles.row}>
        <div style={styles.teamContainer}>
          <h2>Team A: {teamAScore}</h2>
          <button style={styles.button} onClick={() => addPointsToTeamA(1)}>Add 1 Point</button>
          <button style={styles.button} onClick={() => addPointsToTeamA(2)}>Add 2 Points</button>
          <button style={styles.button} onClick={() => addPointsToTeamA(3)}>Add 3 Points</button>
        </div>
        <div style={styles.teamContainer}>
          <h2>Team B: {teamBScore}</h2>
          <button style={styles.button} onClick={() => addPointsToTeamB(1)}>Add 1 Point</button>
          <button style={styles.button} onClick={() => addPointsToTeamB(2)}>Add 2 Points</button>
          <button style={styles.button} onClick={() => addPointsToTeamB(3)}>Add 3 Points</button>
        </div>
      </div>
      <div style={styles.resetContainer}>
        <button style={styles.resetButton} onClick={resetScores}>Reset Scores</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  header: {
    backgroundColor: '#282c34',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    color: 'white',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  teamContainer: {
    margin: '0 20px',
  },
  button: {
    display: 'block',
    margin: '10px auto',
    padding: '10px 20px',
    fontSize: '18px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
  resetContainer: {
    marginTop: '20px',
  },
  resetButton: {
    padding: '10px 20px',
    fontSize: '18px',
    cursor: 'pointer',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
};

export default App;