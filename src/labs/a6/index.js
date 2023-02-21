import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput
  from "./conditional-output";
import React from "react";
import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-List";

function Assignment6() {
  return (
      <div>
        <h1>Assignment 6</h1>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <TodoItem/>
        <TodoList/>
      </div>
  );
}
export default Assignment6;