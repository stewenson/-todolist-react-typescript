import React from 'react'
import shortid from 'shortid'
import {TodoInterface, TodoFormInterface} from "../interface/Interface";

export const ToDoForm: React.FC<TodoFormInterface> = (props) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [values, setValues] = React.useState('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues(event.target.value)
    }

    const handleInputEnter = (event: React.KeyboardEvent) => {
        // Check for ‘Enter’ key
        if (event.key === 'Enter') {
            // Prepare new todo object
            const newTodo: TodoInterface = {
                id: shortid.generate(),
                name: values,
                isComplete: false
            }
            // Create new todo item
            props.handleTodoCreate(newTodo)
            // Reset the input field
            if (inputRef && inputRef.current) {
                inputRef.current.value = ''
            }
        }
    }
    return (
        <div className="todo-form">
            <input
                ref={inputRef}
                type="text"
                placeholder='Enter new todo'
                onChange={event => handleInputChange(event)}
                onKeyPress={event => handleInputEnter(event)}
            />
        </div>
    )
}