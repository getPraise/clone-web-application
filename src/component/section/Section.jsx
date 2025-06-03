// src/component/section/Section.jsx
import React from "react";
import Card from "../card/Card";
import styles from "./Section.module.css";

const Section = ({ title, cards, sectionId }) => {
  return (
    <div id={sectionId} className={styles.section}>
      <div className={styles.heading}>{title}</div>
      <div className={styles.cardHolder}>
        {cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Section;
