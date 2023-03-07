import React, { useState } from "react";

interface Item {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Item[]>([
    { id: 1, text: 'Aprende que es un componente', completed: false },
    { id: 2, text: 'Aprende a crear un componente', completed: true }
  ])  

  const [input, setInput] = useState<string>('');

  const handleToggle = (id:number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed};
        }
        return todo;
      })
    )
  }
  const handleClick = () => {
    const newTodo: Item = {id: Date.now(), text:input, completed: false};
    setTodos([...todos, newTodo])
  }
    return (
      <div className="main-container">
        <h1>Todo List</h1>
        <ul>
          { todos.map((todo)=>(
            <li 
              key={todo.id} 
              onClick={() => handleToggle(todo.id)}
              style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
        <input 
          type="text"
          placeholder="Add todo item"
          onChange={(e) => setInput(e.currentTarget.value)} />
        <button onClick={handleClick}>Add</button>
      </div>  
    )
}