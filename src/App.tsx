import React, { useState, useEffect } from "react";
import robot from "./robotsData/robots.json";
import RobotData from "./components/Robot";
import svgHeader from "./assets/images/logo.svg";
import styles from "./App.module.css";
import ShoppingCar from "./components/ShoppingCar";

interface Props {
  username: string;
}

const App: React.FC<Props> = props => {
  const [count, setCount] = useState<number>(100);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  useEffect(() => {
    document.title = `您点击了${count}次`;
  }, [count]);

  // 其中 [] 代表 componentDidMount 生命周期函数
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json())
  //     .then(data => setRobotGallery(data));
  // }, []);

  // 使用async /await
  useEffect(() => {
    const fetchDate = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setRobotGallery(data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchDate();
  }, []);

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={svgHeader} className={styles.appLogo} alt="" />
        <h1>Robot完美小机器人模型堪比变形金刚</h1>
        <h2>{props.username}</h2>
      </header>
      <ShoppingCar></ShoppingCar>
      {(!error || error !== "") && <div>"网站出错了"{error}</div>}
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map(rEle => (
            <RobotData id={rEle.id} name={rEle.name} email={rEle.email} />
          ))}
        </div>
      ) : (
        <h2>加载中 Loading.....</h2>
      )}
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点击增加按钮
      </button>
      <span>{count}</span> */}
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
