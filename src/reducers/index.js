import { combineReducers } from 'redux';
import AuthReducers from './authreducers';
import ListReducers from './listreducers';
import TweetRerducers from './tweetreducers';

export default combineReducers({
    authResponse: AuthReducers,
    charactersResponse: ListReducers,
    tweetResponse: TweetRerducers
});