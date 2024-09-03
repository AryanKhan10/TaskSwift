import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

import ListItem from "./ListItem";
function TodoList() {
  const { todo,setTodo, deleteTodo } = useContext(TodoContext);

  console.log(todo);
//   console.log();


  if (todo && todo.length > 0) {
    return (
      <div className="w-6/12 flex flex-col bg-[#303952] mx-auto mt-10 space-y-2 rounded-lg">
        {todo.map((todo) => {
          return <ListItem key={todo.id} todo={todo}/>
        })}
      </div>
    );
  } else {
    return <div className="dark:text-white text-center text-2xl font-medium my-14">Tasks doesn't exist</div>;
  }
}
export default TodoList;
