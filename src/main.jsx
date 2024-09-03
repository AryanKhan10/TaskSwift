import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  TodoProvider  from './contexts/TodoContext.jsx'
import {Toaster} from 'react-hot-toast'

createRoot(document.getElementById('root')).render(

<StrictMode>
<TodoProvider>
    <App />
    <Toaster/>
  </TodoProvider>
  </StrictMode>,
  
)
