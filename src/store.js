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