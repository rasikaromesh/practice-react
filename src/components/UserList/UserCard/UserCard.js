import React from "react";
import styles from "./UserCard.module.css";

const UserCard = (props) => {
  return (
    <div className={styles.card}>
      <p>{`${props.name} (${props.age} years old)`}</p>
    </div>
  );
};

export default UserCard;
