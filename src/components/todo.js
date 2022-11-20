import React from 'react'
import Toodo from './toodo'


const ToDo=({todos,setTodos,filteredTodos})=>{
    return(
        <div className="todo-container">
        <ul className="todo-list">
            {filteredTodos.map((todo)=>(<Toodo todos={todos} setTodos={setTodos} todo={todo} key={todo.id} text={todo.text}/>
            ))}
      
        </ul>
       </div>

    )
}

export default ToDo;




