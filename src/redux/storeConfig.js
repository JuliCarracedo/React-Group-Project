import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';
import missionsJoinedReducer from './missions/missionsJoined';

const reducer = combineReducers({
  missionsReducer,
  missionsJoinedReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
