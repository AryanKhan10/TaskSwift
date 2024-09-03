import { useContext, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { TodoContext } from './contexts/TodoContext'
function App() {

  const {todo,setTodo, theme,setTheme} = useContext(TodoContext)
  // console.log(todo)

  //reload krne pe hi local storage se get kare LS se or todo array mai set kare
  useEffect(()=>{
    const todo = JSON.parse(localStorage.getItem("todo"));
    const theme = JSON.parse(localStorage.getItem("theme"));
    console.log(todo)
    if (todo && todo.length>0) {
      setTodo(todo);
      setTheme(theme);
    }
    else{
      localStorage.setItem("todo", JSON.stringify(todo))
   localStorage.setItem("theme", JSON.stringify(theme))
    }
    
  },[])
  
  // LS mai store kare jb todo change ho
  useEffect(()=>{
   localStorage.setItem("todo", JSON.stringify(todo))
   localStorage.setItem("theme", JSON.stringify(theme))

  },[todo,theme])
  return (

    <div className='mt-20'>
      <Header/>
      <TodoForm/>
      <TodoList/>
    </div>

  )
}

export default App
