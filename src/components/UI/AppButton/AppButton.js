import React from "react";
import styles from "./AppButton.module.css";

const AppButton = (props) => {
  return (
    <button type={props.type} className={styles.button}>
      {props.lable}
    </button>
  );
};

export default AppButton;
