import React from "react";
import style from './AppInput.module.css';

const AppInput = (props) => {
  return (
    <div className={style['form-control']}>
      <label>{props.lable}</label>
      <input type={props.type}/>
    </div>
  );
};

export default AppInput;
