import React, { useRef, useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
    const context = useContext(TodosContext);
    const todoTextInput = useRef<HTMLInputElement>(null); // For button are HTMLButtonElement; for paragrah are HTMLParagrahElement
    const submitHandler = (event: React.FormEvent) => {
        // Onclick => MouseEvent
        event.preventDefault();
        const enteredText = todoTextInput.current!.value;
        if (enteredText.trim().length === 0) {
            // Throw Error
            return;
        }
        context.addTodo(enteredText);
    };
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" ref={todoTextInput} />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;
