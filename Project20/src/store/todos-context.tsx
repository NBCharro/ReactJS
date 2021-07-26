import React, { useState } from 'react';
import Todo from '../models/todo';

// For not repeating the types:
type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

// Data
export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {},
});

// Managing the data
const TodosContextProvider: React.FC = (props) => {
    const todosDefault = [
        new Todo('Learn React'),
        new Todo('Learn Typescript'),
    ];
    const [todos, setTodos] = useState<Todo[]>(todosDefault);
    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        setTodos((prevTodos) => [newTodo, ...prevTodos]);
    };
    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    };
    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    };
    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;
