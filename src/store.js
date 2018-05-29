import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export default createStore(
  combineReducers({
    form: formReducer  
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// userReducer keeps the values of the form fields updated within the state
// and keeps track of information:
// Whether we've submitted the form
// Whether the contents o the form are valid