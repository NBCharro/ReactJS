import useInput from '../hooks/use-input';
// import useInput from '../hooks/use-inputReducer';

const BasicForm = props => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameInputChangeHandler,
        inputBlurHandler: nameInputBlurHandler,
        reset: resetNameInput,
    } = useInput(value => value.trim() !== '');
    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: lastNameInputHasError,
        valueChangeHandler: lastNameInputChangeHandler,
        inputBlurHandler: lastNameInputBlurHandler,
        reset: resetLastNameInput,
    } = useInput(value => value.trim() !== '');
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailInputChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
        reset: resetEmailInput,
    } = useInput(value => value.includes('@'));

    let formIsValid = false;
    if (enteredNameIsValid && enteredEmailIsValid && enteredLastNameIsValid) {
        formIsValid = true;
    }
    const formSubmissionHandler = event => {
        event.preventDefault();
        if (
            !enteredNameIsValid ||
            !enteredEmailIsValid ||
            !enteredLastNameIsValid
        )
            return;
        console.log(enteredName);
        console.log(enteredLastName);
        console.log(enteredEmail);
        resetNameInput();
        resetLastNameInput();
        resetEmailInput();
    };

    const nameInputClasses = nameInputHasError
        ? 'form-control invalid'
        : 'form-control';
    const lastNameInputClasses = lastNameInputHasError
        ? 'form-control invalid'
        : 'form-control';
    const emailInputClasses = emailInputHasError
        ? 'form-control invalid'
        : 'form-control';
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="control-group">
                <div className={nameInputClasses}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={nameInputChangeHandler}
                        onBlur={nameInputBlurHandler}
                        value={enteredName}
                    />
                    {nameInputHasError && (
                        <p className="error-text">Please enter a first name.</p>
                    )}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={lastNameInputChangeHandler}
                        onBlur={lastNameInputBlurHandler}
                        value={enteredLastName}
                    />
                    {lastNameInputHasError && (
                        <p className="error-text">please enter a last name.</p>
                    )}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="name">E-Mail Address</label>
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

export default BasicForm;
