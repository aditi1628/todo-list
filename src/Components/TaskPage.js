import React from "react";
import InputField from "./InputField";
import TodoList from "./TodoList";
import { updateInput } from "../utils/updateInput";
import { addItem } from "../utils/addItem";
import { deleteItem } from "../utils/deleteItem";
import { editItem } from "../utils/editItem";
import { updateStatus } from "../utils/updateStatus";
import DropdownMenu from "./DropdownMenu";
const TaskPage = ({ userInput, setUserInput, list, setList }) => {
  return (
    <>
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>TODO LIST</h1>
      <hr />
      <InputField
        userInput={userInput}
        updateInput={(value) => updateInput(value, setUserInput)}
        addItem={() => addItem(userInput, list, setList, setUserInput)}
      />
      <TodoList
        list={list}
        deleteItem={(key) => deleteItem(key, list, setList)}
        editItem={(index) => editItem(index, list, setList)}
        updateStatus={(index, status) =>
          updateStatus(index, status, list, setList)
        }
      />
    </>
  );
};
export default TaskPage;
