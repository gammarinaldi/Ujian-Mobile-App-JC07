import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postFormReducer from './postFormReducer';
import postListReducer from './postListReducer';

export default combineReducers({
    auth: authReducer,
    postForm: postFormReducer,
    postlist: postListReducer
});