import React from "react";
import ReactDOM from "react-dom";
import AppButton from "../AppButton/AppButton";
import Card from "../Card/Card";
import styles from "./AppModal.module.css";

const BackDrop = (props) => {
  return <div onClick={props.onClick} className={styles.backdrop} />;
};

const FooterContent = (props) => {
  return <AppButton onClick={props.onClick ? props.onClick : null} />;
};

const Modal = (props) => {
  return (
    <Card className={styles.modal}>
      <h3 className={styles["modal-headder"]}>{props.title}</h3>
      <div className={styles.content}>{props.content}</div>
      <footer className={styles.footer}>
        <FooterContent onClick={props.onOkayClick ? props.onOkayClick : null} />
      </footer>
    </Card>
  );
};

const AppModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onOkayClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          onOkayClick={props.onOkayClick}
          title={props.title}
          content={props.message}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default AppModal;
