import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk';
import studentReducer from './reducers/studentReducer';


export default createStore(
  combineReducers({
    form: formReducer,
    user: userReducer,  
    student: studentReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

// userReducer keeps the values of the form fields updated within the state
// and keeps track of information:
// Whether we've submitted the form
// Whether the contents o the form are valid