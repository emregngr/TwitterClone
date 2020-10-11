import { combineReducers } from 'redux';
import AuthReducers from './authreducers';
import ListReducers from './listreducers';
import TweetRerducers from './tweetreducers';
import MessagesReducers from './messagesreducers';

export default combineReducers({
    authResponse: AuthReducers,
    charactersResponse: ListReducers,
    tweetResponse: TweetRerducers,
    messageResponse: MessagesReducers
});