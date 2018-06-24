import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyD-kjeC2DrUiBByzizZMf_yyO0lz-ty9oY',
    authDomain: 'auth-e2555.firebaseapp.com',
    databaseURL: 'https://auth-e2555.firebaseio.com',
    projectId: 'auth-e2555',
    storageBucket: 'auth-e2555.appspot.com',
    messagingSenderId: '470458842136'
  });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
