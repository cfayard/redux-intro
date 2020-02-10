// console.log('it is working. i am a robot')

// "The bank" - state
// Describe the ideal version of state
// {
//     amount: 100
// }

// // if we added 1 to the amount, what would state look like?
// {
//     amount: 101
// }


// // "A transaction slip" - action
// {
//     type: 'INCREMENT'    
// }

// {
//     type: 'DECREMENT'
// }

// {
//     type: '🏄'
// }

// {
//     amounts: [0]
// }

// {
//     amounts: [1]
// }

// {
//     type: INCREMENT,
//     id: 0    
// }



import { 
    createStore
} from 'redux';
// import { act } from 'react-dom/test-utils';
// "The teller" - reducer function
// reducers are always named for the state they manage.
// They always receive the current state and the action
// they're processing.
const defaultState = { amounts: [0, 0, 0, 0, 0] };

// Create
const ADD_COUNTER = 'ADD_COUNTER'
// Update
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// Delete
const DEL_COUNTER = 'DEL_COUNTER'

function counter(state=defaultState, action) {
    console.log('Somebody called counter()');
    const newState = { ...state };

    switch(action.type) {
        case INCREMENT:
            newState.amounts[action.id] = state.amounts[action.id] + 1
        break;
        case DECREMENT:
            newState.amounts[action.id] = state.amounts[action.id] - 1
        break;
        case ADD_COUNTER:
            newState.amounts.push(0)
        break;
        case DEL_COUNTER:
            newState.amounts.splice(action.id, 1)
        break;    
    }

    // They *must* return the new version of state.
    return newState;
}

// You give it a reducer, it gives you a "store".
// The store is an object that manages your state 
// using your reducer.
const store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// "Push notifications" - subscribe to changes in the store
store.subscribe(() => {
    console.log(`The state is now:`);
    // console.table();
    console.table(store.getState());
});


function actionIncrement(id) {
    return {
        type: 'INCREMENT',
        id
    }
}

function actionDecrement(id) {
    return {
        type: 'DECREMENT',
        id
    }
}

function actionADD_COUNTER() {
    return {
        type: 'ADD_COUNTER'
    }
}

function actionDEL_COUNTER() {
    return {
        type: 'DEL_COUNTER'
    }
}

// Let's give the store some actions to process.
store.dispatch(actionADD_COUNTER());
store.dispatch(actionADD_COUNTER());
store.dispatch(actionADD_COUNTER());
store.dispatch(actionADD_COUNTER());
store.dispatch(actionADD_COUNTER());
store.dispatch(actionDEL_COUNTER());
store.dispatch(actionDEL_COUNTER());
store.dispatch(actionDEL_COUNTER());
store.dispatch(actionIncrement());
store.dispatch(actionDecrement());

