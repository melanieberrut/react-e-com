import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAUiNtGXE6S4OQUBnFzphhBvjWZd7XCm4g',
  authDomain: 'react-com-test.firebaseapp.com',
  databaseURL: 'https://react-com-test.firebaseio.com',
  projectId: 'react-com-test',
  storageBucket: '',
  messagingSenderId: '930668074191'
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const auth = firebase.auth();

export { auth };
