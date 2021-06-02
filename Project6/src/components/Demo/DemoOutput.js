import React from 'react';
import Nieto from './Nieto';
const DemoOutput = props => {
    console.log('Demo running');
    return (
        <>
            <p>{props.show ? 'This is new!' : ''}</p>
            <Nieto />
        </>
    );
};

export default React.memo(DemoOutput);
