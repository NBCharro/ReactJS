import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counterSlice';
import classes from './Counter.module.css';

const Counter = () => {
    // Acciones
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };
    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };
    const increasebyHandler = () => {
        dispatch(counterActions.increaseby(5)); // Toolkit => {type:SOME_ID_TOOLKIT, payload: 5}
    };
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());
    };

    // Obtener datos
    const counter = useSelector(state => state.counter.counter); // Cuando usamos useSelector, React-redux automaticamente añade una suscripcion para este componente. Si borramos el componente del DOM, React-redux eliminara la suscripcion
    const show = useSelector(state => state.counter.showCounter);

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={increasebyHandler}>Increase by 5</button>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;

// import { useSelector, useDispatch } from 'react-redux';
// import classes from './Counter.module.css';

// const Counter = () => {
//     // Acciones
//     const dispatch = useDispatch();

//     const incrementHandler = () => {
//         dispatch({ type: 'increment' });
//     };
//     const decrementHandler = () => {
//         dispatch({ type: 'decrement' });
//     };

//     const increasebyHandler = () => {
//         dispatch({ type: 'increaseby', increase: 5 });
//     };

//     const toggleCounterHandler = () => {
//         dispatch({ type: 'toggle' });
//     };

//     // Obtener datos
//     const counter = useSelector(state => state.counter); // Cuando usamos useSelector, React-redux automaticamente añade una suscripcion para este componente. Si borramos el componente del DOM, React-redux eliminara la suscripcion
//     const show = useSelector(state => state.showCounter);

//     return (
//         <main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             {show && <div className={classes.value}>{counter}</div>}
//             <div>
//                 <button onClick={increasebyHandler}>Increase by 5</button>
//                 <button onClick={incrementHandler}>Increment</button>
//                 <button onClick={decrementHandler}>Decrement</button>
//             </div>
//             <button onClick={toggleCounterHandler}>Toggle Counter</button>
//         </main>
//     );
// };

// export default Counter;
