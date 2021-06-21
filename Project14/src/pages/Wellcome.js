import React from 'react';
import { Route } from 'react-router-dom';
// import classes from './Wellcome.module.css';

const Wellcome = props => {
    return (
        <section>
            <h1>The Wellcome Page</h1>;
            <Route path="/wellcome/new-user">
                <p>Wellcome, New User!</p>
            </Route>
        </section>
    );
};

export default Wellcome;
