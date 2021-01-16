import React from 'react';
// import './App.css';
import robot from './robotsData/robots.json'
import RobotData from './components/Robot'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.robotList}>
        {robot.map((rEle) => <RobotData id={rEle.id} name={rEle.name} email={rEle.email} />)}
      </div>
    </div>
  );
}

export default App;
