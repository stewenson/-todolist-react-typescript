import React from 'react'
import {TodoListInterface} from "../interface/Interface";
import {ToDoItem} from "./ToDoItem";

export const ToDoList: React.FC<TodoListInterface> = (props) => {
    return (
        <div className="todo-list">
 <ul>
    {props.todos.map((todo) => (
            <li key={todo.id}>
                <ToDoItem
                    todos={todo}
                    handleTodoUpdate={props.handleTodoUpdate}
                    handleTodoRemove={props.handleTodoRemove}
                    handleTodoComplete={props.handleTodoComplete}

                />
            </li>
        ))}
</ul>
</div>
)
}