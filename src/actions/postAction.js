import firebase from '@firebase/app';
import '@firebase/database';

import {
    POSTING_UPDATE,
    POSTING_CREATE,
    GETLIST_SUCCESS
} from './types'

export const postingUpdate = (prop, value) => {
    return {
        type: POSTING_UPDATE,
        payload: { prop, value }
    };
};

export const postingCreate = (data) => {
    
    return (dispatch) => {
        firebase.database().ref(`/users/posting`)
        .push(data)
        .then(() => {
            dispatch({ type: POSTING_CREATE });
        });
    };
}

export const getAllPost = () => {
    return (dispatch) => {
        firebase.database().ref('/users/posting')
        .on('value', snapshot => {
            dispatch({ 
                type: GETLIST_SUCCESS, 
                payload: snapshot.val()
            });
        });
        
    };
};

