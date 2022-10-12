import React from "react";
import AppInput from "../UI/AppInput/AppInput";
import style from './UserInput.module.css';

const UserInput = () => {
  return (
    <div className={style['form-control']}>
      <AppInput lable='lable' type='text'/>
    </div>
  );
};

export default UserInput;
