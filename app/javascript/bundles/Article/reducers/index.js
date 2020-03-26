import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import registrationReducer from './registrationReducer';
import articleReducer from './articleReducer';

export default combineReducers({
  form: formReducer,
  registration: registrationReducer,
  articles: articleReducer
})