import { createContext, useState } from "react";
import { toast } from "react-hot-toast"

export const TodoContext = createContext()

const TodoProvider=({children})=>{

    const [theme, setTheme] = useState('light')
    const [todo,setTodo]= useState([
        // { 
        //     id:1,
        //     title:"todo",
        //     complete:false
        // }
    ]);
    // const [complete, setCompete] =useState(false);
    
    const addTodo=(todo)=>{
        setTodo( (prevTodo)=> [...prevTodo, todo])

    };
    const updateTodo=(id,todooo)=>{
        // console.log(todooo)
        setTodo( (prev) => 
            prev.map( (prevTodo) =>
                prevTodo.id === id ?  todooo : prevTodo
            )
        );
        // OR
        // setTodo((prev) => 
        //     prev.map((prevTodo) =>
        //       prevTodo.id === id ? { ...prevTodo, ...todooo } : prevTodo
        //     )
        //   );
    };
    const deleteTodo=(id)=>{
        setTodo((prevTodo)=> prevTodo.filter((todo)=>todo.id !==id) )
        toast.success("Task Removed")
    };

    const changeTheme=(status)=>{
        if(status==="dark"){
                setTheme("light")
            }
            else setTheme("dark")
    }
    return <TodoContext.Provider value={{todo,addTodo,setTodo,updateTodo,deleteTodo,changeTheme,theme,setTheme}}>
                {children}
            </TodoContext.Provider>
};
export default TodoProvider