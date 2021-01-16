import React from 'react'
import styles from './Robot.module.css'


interface RobotPropsData {
    id:number
    name:string
    email:string
}

// 解构：({id,name,email})
const Robot:React.FC<RobotPropsData> = ({id,name,email}) =>{
    return(
        <div className={styles.cardContainer}>
            <img alt='' src={`https://robohash.org/${id}`}></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Robot