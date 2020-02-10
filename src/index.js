
// console.log('Yay it works')

// "The bank" - state
// describe the ideal version of state
// {
//     amount: 100
// }

// if we added 1 to the amount what whould state look like?
// {
//     // amount: 101
// }

// "a transaction slip" - action
// {
//     type: 'INCREMENT'
// }
// {
//     type: 'DECREMENT'
// }
// {
//     type: '🍄'
// }

// Question #1:
// How wouold you handle state, with two different amounts?
// {
//     amount1: 101,
//     amount2: 3
// }

import {
    createStore
} from 'redux';

// CREATE YOUR Action types as constants
// so that you get error messages for typos.
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// Question #2:
// How would you handle state so you could add and remove amounts?
// Where each amount can be incremented and decremented?
const ADD_COUNTER = 'ADD_COUNTER';
const DEL_COUNTER = 'DEL_COUNTER';

// write action creator functions.
// They format your action objects
// Again, to avoid typos
function actionIncrement(howMuch=1) {
    return {
        type: INCREMENT,
        amount: howMuch
    }
}
function actionDecrement(howMuch=1) {
    return {
        type: DECREMENT,
        amount: howMuch
    }
}
function actionAdd() {
    return {
        type: ADD_COUNTER
    }
}
function actionDel() {
    return {
        type: DEL_COUNTER
    }
}


// "the teller" - reducer function
// reducers are always named form the state they manage
// They always receive the current state and the action theyre processing.
const defaultState = {amount: 100}
function counter(state=defaultState, action) {
    console.log('somebody called counter')
    const newState = { ...state };

    switch(action.type) {
        case 'INCREMENT':
            newState.amount = state.amount + action.amount;
            break;
        case 'DECREMENT':
            newState.amount = state.amount - action.amount;
            break;
        case 'ADD_COUNTER':
            newState.amount = state.amount - action.amount;
            break;
        case 'DEL_COUNTER':
            newState.amount = state.amount - action.amount;
            break;
        default:
            break;
    }
    // They *must* return the new version of state
    return newState;
}

// You give it a reducer, it gives you a "store".
// The store is an object that manages your state
// using your reducer
const store = createStore(counter);
// console.log('hey here i am')

// "push notifications" - subscribe to changes in the store
store.subscribe(() => {
    console.log(`The state is now:`);
    console.table(store.getState())
});

// Lets give the store some actions to process.
store.dispatch(actionIncrement());
store.dispatch(actionDecrement());
store.dispatch(actionAdd());
store.dispatch(actionDel());

store.dispatch(actionIncrement(5));
store.dispatch(actionDecrement(99));

// store.dispatch({
//     type: 'INCREMENT',
//     amount: 'garbage'
// });

// store.dispatch({
//     type: '🔊'
// });

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
