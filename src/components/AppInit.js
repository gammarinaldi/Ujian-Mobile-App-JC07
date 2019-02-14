import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import { alreadyLogin, notLoginYet } from '../actions'
import Main from './Main';

class AppInit extends Component {

  componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyAyNAlYkoPehUbc18cSWVKsmtiFtFW-WoM',
      authDomain: 'manager-react-native-82290.firebaseapp.com',
      databaseURL: 'https://manager-react-native-82290.firebaseio.com',
      projectId: 'manager-react-native-82290',
      storageBucket: 'manager-react-native-82290.appspot.com',
      messagingSenderId: '33426374427'
    };
    firebase.initializeApp(config);
      
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            this.props.alreadyLogin(user);
        }
        else {
            this.props.notLoginYet();
        }
    });
  }

  render() {
    return(
          <Main />
    );
  }
}



export default connect(null, { alreadyLogin, notLoginYet })(AppInit);
