import React from "react";
import style from "./AppInput.module.css";

const AppInput = (props) => {
  const onBlurHandler = (event) => {
    props.onBlur(event.target.value);
  };
  return (
    <div className={style["form-control"]}>
      <label>{props.lable}</label>
      <input onBlur={onBlurHandler} type={props.type} />
    </div>
  );
};

export default AppInput;
