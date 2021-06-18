import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }, // mergeados automaticamente en uno solo
});

// const store = configureStore({
//     reducer: counterSlice.reducer,
// });

export default store;

// import { createStore } from 'redux';

// const initialCounterState = {
//     counter: 0,
//     showCounter: true,
// };

// const counterReducer = (oldState = initialCounterState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: oldState.counter + 1,
//             showCounter: oldState.showCounter,
//         };
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: oldState.counter - 1,
//             showCounter: oldState.showCounter,
//         };
//     }
//     if (action.type === 'increaseby') {
//         return {
//             counter: oldState.counter + action.increase,
//             showCounter: oldState.showCounter,
//         };
//     }
//     if (action.type === 'toggle') {
//         return {
//             ...oldState,
//             showCounter: !oldState.showCounter,
//         };
//     }

//     return oldState;
// };

// const store = createStore(counterReducer);

// export default store;
