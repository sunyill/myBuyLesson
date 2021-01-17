import React, { useContext } from "react";
import styles from "./Robot.module.css";
// import { userContext } from "../index";
import { AppState, AppSetStateContext } from "../AppState";

interface RobotPropsData {
  id: number;
  name: string;
  email: string;
}

// 解构：({id,name,email})
const Robot: React.FC<RobotPropsData> = ({ id, name, email }) => {
  const value = useContext(AppState);
  const setState = useContext(AppSetStateContext);
  const addtoCart = () => {
    if (setState) {
      setState(state => {
        return {
          ...state,
          shoppingCart: { items: [...state.shoppingCart.items, { id, name }] }
        };
      });
    }
  };
  return (
    <div className={styles.cardContainer}>
      <img alt="" src={`https://robohash.org/${id}`}></img>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者:{value.username}</p>
      <button onClick={addtoCart}>添加购物车</button>
    </div>
  );
};

export default Robot;
