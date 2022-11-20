import './App.css';
import Form from './components/form'
import ToDo from './components/todo'
import React , {useState,useEffect} from 'react'

function App() {
  const [inputText, setInputText] = useState("")
  const [todos,setTodos]=useState([])
  const [status,setStatus]=useState('all')
  const [filteredTodos, setFilteredTodos]=useState([])

  

  const filterHandler=()=>{
    switch(status){
      case 'completed':
         setFilteredTodos(todos.filter((todo) => todo.completed===true))
         break
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo)=>todo.completed===false))
        break
      default:
        setFilteredTodos(todos)
        break

    }
  }
  useEffect(()=>{
    getLocalTodos()
  },[])
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();

  },[todos,status])

  const saveLocalTodos=()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
    }
  
  const getLocalTodos=()=>{
    if (localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify(todos))

    }
    else{
      let todoLocal=JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }
  return (
    <div className="App">
      <header>
      <h1 >To-Do</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} status={status} setStatus={setStatus}/>
      <ToDo todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
