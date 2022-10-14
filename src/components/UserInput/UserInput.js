import React, { useState } from "react";
import AppButton from "../UI/AppButton/AppButton";
import AppInput from "../UI/AppInput/AppInput";
import AppModal from "../UI/AppModal/AppModal";
import Card from "../UI/Card/Card";
import style from "./UserInput.module.css";

const UserInput = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!name || !age) {
      setError({
        title: "Invalid Input",
        message: "Please enter valied name and age (non-empty values)",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter valied age (age >0)",
      });
      return;
    }
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

  const handelError = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <AppModal
          onOkayClick={handelError}
          title={error.title}
          message={error.message}
        />
      )}
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
