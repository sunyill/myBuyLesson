import React,{useContext} from "react";
import styles from "./Robot.module.css";
import { userContext } from "../index";

interface RobotPropsData {
  id: number;
  name: string;
  email: string;
}

// 解构：({id,name,email})
const Robot: React.FC<RobotPropsData> = ({ id, name, email }) => {
  const value = useContext(userContext);
  return (
    <div className={styles.cardContainer}>
      <img alt="" src={`https://robohash.org/${id}`}></img>
      <h2>{name}</h2>
      <p>{email}</p>
      <h2>作者:{value.username}</h2>
    </div>
  );
};

export default Robot;
