import React, { useState } from "react";
import robot from "./robotsData/robots.json";
import RobotData from "./components/Robot";
import svgHeader from "./assets/images/logo.svg";
import styles from "./App.module.css";
import ShoppingCar from "./components/ShoppingCar";

const App: React.FC = props => {
  const [count, setCount] = useState<number>(100);
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={svgHeader} className={styles.appLogo} alt="" />
        <h1>Robot完美小机器人模型堪比变形金刚</h1>
      </header>
      <ShoppingCar></ShoppingCar>
      <button onClick={ ()=>{setCount(count+1)} }>点击增加按钮</button>
      <span>{count}</span>
    </div>
  );
};
// function App() {
//   return (
//     <div className={styles.app}>
//       <header className={styles.appHeader}>
//         <img src={svgHeader} className={styles.appLogo} alt="" />
//         <h1>Robot完美小机器人模型堪比变形金刚</h1>
//       </header>
//       <ShoppingCar></ShoppingCar>
//       <div className={styles.robotList}>
//         {robot.map(rEle => (
//           <RobotData id={rEle.id} name={rEle.name} email={rEle.email} />
//         ))}
//       </div>
//     </div>
//   );
// }

export default App;
