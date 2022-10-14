import React from "react";
import ReactDOM from "react-dom";
import AppButton from "../AppButton/AppButton";
import Card from "../Card/Card";
import styles from "./AppModal.module.css";

const BackDrop = () => {
  return <div className={styles.backdrop} />;
};

const FooterContent = (props) => {
  return <AppButton onClick={props.onClick ? props.onClick : null} />;
};

const Modal = (props) => {
  return (
    <Card className={styles.modal}>
      <h3 className={styles["modal-headder"]}>{props.title}</h3>
      <content className={styles.content}>{props.content}</content>
      <footer className={styles.footer}>
        <FooterContent onClick={props.onOkayClick ? props.onOkayClick : null} />
      </footer>
    </Card>
  );
};

const AppModal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(<Modal />, document.getElementById("modal-root"))}
    </>
  );
};

export default AppModal;
