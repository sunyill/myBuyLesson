import React, { useContext } from "react";
import styles from "./Robot.module.css";
// import { userContext } from "../index";
import { AppState, AppSetStateContext } from "../AppState";
import { withAddToCart } from "./AddToCart";

export interface RobotPropsData {
  id: number;
  name: string;
  email: string;
  addToCart: (id, name) => void;
}

// 解构：({id,name,email})
const RobotDiscount: React.FC<RobotPropsData> = ({
  id,
  name,
  email,
  addToCart
}) => {
  const value = useContext(AppState);

  return (
    <div className={styles.cardContainer}>
      <img alt="" src={`https://robohash.org/${id}`}></img>
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者:{value.username}</p>
      <button onClick={() => addToCart(id, name)}>添加购物车</button>
    </div>
  );
};

export default withAddToCart(RobotDiscount);
