import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

const users = [
    {
        name: 'Jose',
        age: 21,
        id: Math.random().toString().toString(),
    },
    {
        name: 'Pepe',
        age: 56,
        id: Math.random().toString(),
    },
];

function App() {
    const [usersList, setUsersList] = useState(users);
    const addUserHandler = (onName, onAge) => {
        setUsersList(prevUserList => [
            ...prevUserList,
            { name: onName, age: onAge, id: Math.random().toString() },
        ]);
    };
    const deleteHandler = event => {
        event.target.outerHTML = '';
    };

    return (
        <>
            <AddUser onAddUser={addUserHandler} />
            <UserList users={usersList} onDelete={deleteHandler} />
        </>
    );
}

export default App;
