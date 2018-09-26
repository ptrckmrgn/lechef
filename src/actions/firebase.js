import Firebase from 'firebase';
import 'firebase/firestore';
import _ from 'lodash';

const config = {
    apiKey: "AIzaSyC1-de3j7eYFaPcrGcM20txWVUWE7rqOm0",
    authDomain: "ptrckmrgn-lechef.firebaseapp.com",
    databaseURL: "https://ptrckmrgn-lechef.firebaseio.com",
    projectId: "ptrckmrgn-lechef",
    storageBucket: "ptrckmrgn-lechef.appspot.com",
    messagingSenderId: "156866203732"
  };
Firebase.initializeApp(config);
const db = Firebase.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);