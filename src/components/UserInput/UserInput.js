import React, { useState } from "react";
import AppButton from "../UI/AppButton/AppButton";
import AppInput from "../UI/AppInput/AppInput";
import AppModal from "../UI/AppModal/AppModal";
import Card from "../UI/Card/Card";
import style from "./UserInput.module.css";

const UserInput = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.addUser({ id: Math.random().toString(), name, age });
    setName("");
    setAge("");
  };

  const onChangeUserNameField = (userName) => {
    setName(userName);
  };

  const onChangeAgeField = (age) => {
    setAge(age);
  };

  return (
    <>
      <AppModal></AppModal>
      <Card>
        <form onSubmit={onSubmitHandler} className={style["form-control"]}>
          <AppInput
            value={name}
            onChange={onChangeUserNameField}
            lable="Username"
            type="text"
          />
          <AppInput
            value={age}
            onChange={onChangeAgeField}
            lable="Age (Years)"
            type="number"
          />
          <AppButton type="submit" lable="Add User" />
        </form>
      </Card>
    </>
  );
};

export default UserInput;
