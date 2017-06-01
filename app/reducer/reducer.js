const redux = require('redux');
import mang from '../reducer/mang';
import isAdding from '../reducer/isAdding';

const reducer = redux.combineReducers({
    mang,
    isAdding
});

module.exports = reducer;
