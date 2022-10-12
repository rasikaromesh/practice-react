import React from "react";
import AppButton from "../UI/AppButton/AppButton";
import AppInput from "../UI/AppInput/AppInput";
import style from './UserInput.module.css';

const UserInput = () => {
  return (
    <div className={style['form-control']}>
      <AppInput lable='Username' type='text'/>
      <AppInput lable='Age (Years)' type='text'/>
      <AppButton lable={'Add User'}/>
    </div>
  );
};

export default UserInput;
