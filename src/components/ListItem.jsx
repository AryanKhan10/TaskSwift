import { useContext,useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { MdClose } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { MdSaveAs } from "react-icons/md";
import { toast } from "react-hot-toast"
function ListItem({todo}){
    // console.log(todo.title)
    const {setTodo,deleteTodo,updateTodo}= useContext(TodoContext)
  const [isEditible, setIsEditible] = useState(false);
  const [changeTitle, setChangeTitle] = useState(todo.title);


  const toggleComplete=(id)=>{
    setTodo((prev)=> 
                    prev.map( (ptodo)=>
                                        ptodo.id===id ? {...ptodo, complete:!ptodo.complete}:ptodo)) // previous values rehne do,sirf osmai complete ko reverse krdo
  }

    const edit=(id)=>{
      // console.log(changeTitle)
      updateTodo( id, {...todo, title:changeTitle}) //spreed the existing todo, just change the title
      toast.success("Task Updated.")
      // setTodo( (p)=> p.map((prev) => prev.id===id ?  {...prev,title:changeTitle}: prev))
      console.log(todo)
        //changing edit to save button
        setIsEditible(false)
    }
    return(
        <div style={{marginBottom: 0.3 + 'rem'}}
              className={`item h-16  rounded-lg m-1 flex justify-between items-center px-5 ${todo.complete ? "bg-[#2a9d8f]":"bg-[#303952]"} transition-all ease-linear duration-150 delay-75`}
            >
              <div className="w-full flex items-center space-x-3">
              <div className="">
                  <input
                    className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100"
                    type="checkbox"
                    checked={todo.complete}
                    onChange={()=>toggleComplete(todo.id)}
                  />
              </div>

              {/* <p className="text-xl font-semibold text-white">{todo.title}</p> */}
            <input
            id="todo"
            value={changeTitle}
            type="text"
            readOnly={!isEditible}
            onChange={(e)=>setChangeTitle(e.target.value)}
            className={`w-full py-1 text-lg font-medium text-white capitalize  transition-colors focus:outline-none peer 
                        ${todo.complete ? " line-through":""} ${isEditible ? "focus:border-b-2  focus:border-blue-700":""}  bg-inherit`}
            />
    

              </div>

              <div className="flex space-x-2">
                {
                    !isEditible ? <AiOutlineEdit 
                    onClick={()=>setIsEditible(prev=>!prev)} 
                    className="text-2xl font-medium text-blue-200 cursor-pointer hover:text-purple-600 transition-all duration-100 delay-75 hover:scale-125" 
                    />:
                    <MdSaveAs 
                    onClick={()=>edit(todo.id)} 
                    className="text-2xl font-medium text-blue-200 cursor-pointer hover:text-purple-600 transition-all duration-100 delay-75 hover:scale-125" 
                    
                    />
                }
                <MdClose
                  className="text-2xl font-medium text-blue-200 cursor-pointer hover:text-purple-600 transition-all duration-100 delay-75 hover:scale-125"
                  onClick={() => deleteTodo(todo.id)}
                />
              </div>
            </div>
    )
}
export default ListItem;