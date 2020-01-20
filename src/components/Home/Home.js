import React from "react";
import styles from "./Home.module.css";

import Card from "../../shared/components/Card/Card";
import blackGraph from "../../assets/graphBlack.png";

const Home = () => {
  const cards = [{ name: "Graph", img: blackGraph }];
  return (
    <div className={styles.home}>
      {cards.map(card => (
        <Card name={card.name} img={card.img}></Card>
      ))}
    </div>
  );
};

export default Home;
