import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';


const middewares = [
thunkMiddleware,
];

const store = createStore(rootReducer, {}, compose(
applyMiddleware(...middewares),
window.devToolsExtension ? window.devToolsExtension() : f => f 
)
);

if (module.hot) {
module.hot.accept('../reducers', () => {
const nextReducer = require('../reducers').default; 
store.replaceReducer(nextReducer);
});
}


export default store;
