import React from "react";
import InputForm from "./InputForm";

const NewTask = (props) => {
  const dataSavedHandler = (userEnteredData) => {
    const newTask = {
      ...userEnteredData,
      id: Math.random().toString(),
    };
    props.onAddTask(newTask);
  };

  return <InputForm onDataSaved={dataSavedHandler}></InputForm>;
};

export default NewTask;
