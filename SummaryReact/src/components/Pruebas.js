import { useState } from 'react';

const Pruebas = (props) => {
    const [datos, setDatos] = useState(initialState);
    const url = '';
    function getHandler(datos) {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setDatos(data);
            });
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
        </section>
    );
};

export default Pruebas;
