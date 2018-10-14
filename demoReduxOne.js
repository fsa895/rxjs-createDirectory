
const counter = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1 ;
        case 'DECREMENT':
            return state - 1 ;
        default: 
            return state;    
    }
}


const Rx = require('redux');

const { createStore } = redux;
const store = createStore(counter);

store.subsribe(() => {
    document.body.innerText = store.getState();
});

document.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'});
});