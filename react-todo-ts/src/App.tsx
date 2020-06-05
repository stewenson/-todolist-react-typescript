import React, {useState} from 'react';
import './App.scss';
// Interface
import {TodoInterface} from "./interface/Interface";
// components
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";

export default function App() {
  const [todos, setTodos] = useState<TodoInterface[]>([])

  // Creating new todo item
  const handleTodoCreate = (todo: TodoInterface) => {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.push(todo)
    setTodos(newTodosState)
  }

  // Update existing todo item
  const handleTodoUpdate = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.name = event.target.value
    setTodos(newTodosState)
  }

  // Remove existing todo item
  const handleTodoRemove = (id: string) => {
    const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)
    setTodos(newTodosState)
  }

  // Check existing todo item as completed
  const handleTodoComplete = (id: string) => {
    const newTodosState: TodoInterface[] = [...todos]
    // Find the correct todo item and update its ‘isCompleted’ key
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isComplete = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isComplete
    setTodos(newTodosState)
  }

  return (
    <div className="App">
        <h2>My ToDo APP</h2>
        <ToDoForm
            todos={todos}
            handleTodoCreate={handleTodoCreate}
        />
        <ToDoList
            todos={todos}
            handleTodoUpdate={handleTodoUpdate}
            handleTodoRemove={handleTodoRemove}
            handleTodoComplete={handleTodoComplete}

        />
    </div>
  );
}
