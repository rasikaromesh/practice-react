import React, { useState } from "react";
import AppButton from "../UI/AppButton/AppButton";
import AppInput from "../UI/AppInput/AppInput";
import style from "./UserInput.module.css";

const UserInput = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.addUser({ id: Math.random().toString(), name, age });
  };

  const onBlurUserNameField = (userName) => {
    setName(userName);
  };

  const onBlurAgeField = (age) => {
    setAge(age);
  };

  return (
    <form onSubmit={onSubmitHandler} className={style["form-control"]}>
      <AppInput onBlur={onBlurUserNameField} lable="Username" type="text" />
      <AppInput onBlur={onBlurAgeField} lable="Age (Years)" type="text" />
      <AppButton type="submit" lable="Add User" />
    </form>
  );
};

export default UserInput;
