
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


import {
    createStore
} from 'redux';


// "the teller" - reducer function
// reducers are always named form the state they manage
// They always receive the current state and the action theyre processing.
function counter(state={amount: 100}, action) {
    // console.table(action)
    const newState = { ...state };
    if (action.type === 'INCREMENT') {
        newState.amount =  state.amount + 1;
    } else if (action.type === 'DECREMENT') {
        newState.amount = state.amount - 1;
    } else {
        // no need to do anything. 
        // we already made a copy of state to return.
    }
    // They *must* return the new version of state
    return newState
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
store.dispatch({
    type: 'INCREMENT'
});



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
