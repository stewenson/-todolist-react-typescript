import React from 'react'

// Interface
import { TodoItemInterface } from "../interface/Interface";

export const ToDoItem: React.FC<TodoItemInterface> = (props) => {
    return (
        <div className="todo-item">
            <div onClick={() => props.handleTodoComplete(props.todos.id)}>
                {props.todos.isComplete ? (
                    <span className="todo-item-checked">✔</span>
                    ) : (
                    <span className="todo-item-unchecked" />
                    )}
            </div>
            <div className="todo-item-input-wrapper">
                <input value={props.todos.name}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTodoUpdate(event, props.todos.id)}
                />
            </div>
            <div className="item-remove"
                onClick={() => props.handleTodoRemove(props.todos.id)}>
            ⨯
        </div>
        </div>
    )
}