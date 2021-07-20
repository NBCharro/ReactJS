import { useState } from 'react';
import Output from './Output';

const Greeting = () => {
    const [changedText, setChangedText] = useState(false);
    const changeTextHandler = () => {
        setChangedText(true);
    };
    return (
        <div>
            <h2>Hello World!</h2>
            <button onClick={changeTextHandler}>Change Text!</button>
            {!changedText && <Output>It's good to see you!</Output>}
            {changedText && <Output>Changed!</Output>}
        </div>
    );
};

export default Greeting;
