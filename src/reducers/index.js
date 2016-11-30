import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import track from './track';
import { audioReducer as audio } from 'redux-audio'

export default combineReducers({
  auth,
  track,
  routing: routerReducer,
  audio: audio
});
