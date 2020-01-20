import React from "react";

import styles from "./Card.module.css";

const Card = props => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={props.img}></img>
      <hr></hr>
      <div className={styles.name}>{props.name}</div>
    </div>
  );
};

export default Card;
