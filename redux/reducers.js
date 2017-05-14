import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


// import globalEnquiries from './modules/globalEnquiries';


// // Reducers
// export default combineReducers({
//   // globalEnquiries,
//   form: formReducer
// });


const reducers = {
  // ... your other reducers here ...
  form: formReducer     // <---- Mounted at 'form'
}

const reducer = combineReducers(reducers)
const store = createStore(reducer)