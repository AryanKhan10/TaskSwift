import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { toast } from "react-hot-toast"

function TodoForm() {

    const [newTodo, setNewTodo] =useState('')
    const {addTodo}=useContext(TodoContext);
    // console.log(newTodo)

    const submitHandler=(e)=>{
        e.preventDefault();

        const newTODO={
          id:Date.now(),
          title:newTodo,
          complete:false
        }
      if(!newTodo) return
      // console.log(newTodo)
        addTodo(newTODO)
        // setTodo( (prevTodo)=> [...prevTodo, {id: Date.now() ,title:newTodo}]
        setNewTodo('')
        toast.success("Task Added.")

    }
  return (
    <form onSubmit={submitHandler}>
      <div className="flex w-6/12 items-end justify-center mx-auto space-x-1">
      <div className="w-full input flex flex-col static justify-center">
        <label
          htmlFor="input"
          className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-[#e8e8e8] dark:bg-slate-900 w-fit"
        >
          Todo
        </label>
        <input
          id="todo"
          type="text"
          placeholder="write your tasks.."
          value={newTodo}
          onChange={(e)=>setNewTodo(e.target.value)}
          className="w-full border-blue-500 input px-[10px] py-[11px] dark:text-white text-xs dark:placeholder-slate-400 bg-[#e8e8e8] dark:bg-slate-900 border-2 rounded-[5px] focus:outline-none placeholder:text-black/25"
        />
      </div>
      <button
        className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
            border-blue-600
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
            Add
      </button>
      </div>
    </form>
  );
}
export default TodoForm;
