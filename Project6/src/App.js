import React, { useState, useCallback, useMemo } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import DemoList from './components/DemoList';
import './App.css';

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allow, setAllow] = useState(false);
    const toggleHandler = useCallback(() => {
        if (allow) {
            setShowParagraph(prevPar => !prevPar);
        }
        if (!allow) {
            console.log('Not allowed the toggling');
        }
    }, [allow]);
    const allowHandler = () => {
        setAllow(true);
    };
    const lista = useMemo(() => [1, 3, 3, 45, 12, 314, 5, 7, 9], []);
    return (
        <>
            <div className="app">
                <h1>Hi there!</h1>
                <DemoOutput show={showParagraph} />
                <DemoList lists={lista} />
                <Button onClick={toggleHandler}>Toggle showParagraph</Button>
                <Button onClick={allowHandler}>Allow Toggle</Button>
            </div>
        </>
    );
}

export default App;
