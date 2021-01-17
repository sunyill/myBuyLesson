import React from "react";
import styles from "./Robot.module.css";
import { userContext } from "../index";

interface RobotPropsData {
  id: number;
  name: string;
  email: string;
}

// 解构：({id,name,email})
const Robot: React.FC<RobotPropsData> = ({ id, name, email }) => {
  return (
    <userContext.Consumer>
      {value => {
        return (
          <div className={styles.cardContainer}>
            <img alt="" src={`https://robohash.org/${id}`}></img>
            <h2>{name}</h2>
            <p>{email}</p>
            <h2>作者:{value.username}</h2>
          </div>
        );
      }}
    </userContext.Consumer>
  );
};

export default Robot;
