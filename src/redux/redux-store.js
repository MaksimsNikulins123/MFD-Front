// import { combineReducers, createStore } from 'redux';
import { combineReducers, legacy_createStore as createStore} from 'redux';
import formReducer from './form-reducer';
import searchReducer from './search-reducer';

let reducers = combineReducers({
    search: searchReducer,
    form: formReducer,
});
// let rerender = () => {
//     console.log("state changed");
// }
let store = createStore(reducers);

export default store;