// For  Todo interface
export interface TodoInterface {
    id: string
    name: string
    isComplete: boolean
}

// For Todo form interface
export interface TodoFormInterface {
    todos: TodoInterface[]
    handleTodoCreate: (todo: TodoInterface) => void
}
// For Todo List interface
export interface TodoListInterface {
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void
    handleTodoRemove: (id: string) => void
    handleTodoComplete: (id: string) => void
    todos: TodoInterface[]
}
// For Todo idem interface
export interface TodoItemInterface {
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void
    handleTodoRemove: (id: string) => void
    handleTodoComplete: (id: string) => void
    todos: TodoInterface
}