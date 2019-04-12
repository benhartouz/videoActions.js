import { combineReducers } from 'redux';
import {videosReducers} from './videosReducers'

export default combineReducers({
videos: videosReducers,
});
