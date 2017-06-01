const redux = require('redux');
import reducer from './reducer/reducer';

const store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

module.exports = store;
