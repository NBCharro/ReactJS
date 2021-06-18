import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
    counter: 0,
    showCounter: true,
};

const counterSlice = createSlice({
    name: 'counter',
    // initialState: initialCounterState,
    initialState: initialCounterState,
    reducers: {
        increment(oldState) {
            // Aqui si podemos mutar el estado porque el Toolkit se encarga de clonarlo y sobreescribirlo
            oldState.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increaseby(state, action) {
            state.counter = state.counter + action.payload; // payload no se puede cambiar
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
