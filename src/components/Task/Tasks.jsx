import React from "react";
import TaskItem from "./TaskItem";
import Wrapper from "../Wrapper/Wrapper";

const Tasks = (props) => {
  return (
    <Wrapper>
      {props.items.map((task) => (
        <TaskItem uzduotis={task.taskName} data={task.dueDate} key={task.id} />
      ))}
    </Wrapper>
  );
};

export default Tasks;
