import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './authReducer';
import todoReducer from './todoRuducer';

const rootReducer = (history) => combineReducers({
  auth: authReducer,
  todo: todoReducer,
  router: connectRouter(history)
});

export default rootReducer;