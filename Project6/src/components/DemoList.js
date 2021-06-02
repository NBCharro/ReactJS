import React, { useMemo } from 'react';

const DemoList = props => {
    const sortedlista = useMemo(() => {
        console.log('Rehacer');
        return props.lists.sort((a, b) => a - b);
    }, [props.lists]);
    return (
        <>
            {sortedlista.map(list => (
                <li key={list}>{list}</li>
            ))}
        </>
    );
};

export default DemoList;
