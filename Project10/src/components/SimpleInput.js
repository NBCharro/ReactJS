// import { useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = props => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameInputChangeHandler,
        inputBlurHandler: nameInputBlurHandler,
        reset: resetNameInput,
    } = useInput(value => value.trim() !== '');
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailInputChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
        reset: resetEmailInput,
    } = useInput(value => value.includes('@'));

    // const [enteredName, setEnteredName] = useState('');
    // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
    // const enteredNameIsValid = enteredName.trim() !== ''; // Podemos usar esta forma de validacion en vez de un useState porque por cada tecleo se re-renderiza el componente y se comprueba esta igualdad
    // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    // const enteredEmailIsValid = enteredEmail.includes('@');
    // const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
    // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
    // const nameInputChangeHandler = event => {
    //     setEnteredName(event.target.value);
    // };

    let formIsValid = false;
    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = event => {
        event.preventDefault();
        // setEnteredNameTouched(true);
        // setEnteredEmailTouched(true);
        if (!enteredNameIsValid || !enteredEmailIsValid) return;
        console.log(enteredName);
        console.log(enteredEmail);
        // setEnteredName('');
        // setEnteredNameTouched(false);
        resetNameInput();
        // setEnteredEmail('');
        // setEnteredEmailTouched(false);
        resetEmailInput();
    };

    const nameInputClasses = nameInputHasError
        ? 'form-control invalid'
        : 'form-control';
    const emailInputClasses = emailInputHasError
        ? 'form-control invalid'
        : 'form-control';

    // const nameInputBlurHandler = event => {
    //     setEnteredNameTouched(true);
    // };
    // const emailInputChangeHandler = event => {
    //     setEnteredEmail(event.target.value);
    // };
    // const emailInputBlurHandler = event => {
    //     setEnteredEmailTouched(true);
    // };
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                />
                {nameInputHasError && (
                    <p className="error-text">Name must not be empty.</p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">Your email</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
                />
                {emailInputHasError && (
                    <p className="error-text">Please enter a valid Email</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
