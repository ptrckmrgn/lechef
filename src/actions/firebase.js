import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyC1-de3j7eYFaPcrGcM20txWVUWE7rqOm0",
    authDomain: "ptrckmrgn-lechef.firebaseapp.com",
    databaseURL: "https://ptrckmrgn-lechef.firebaseio.com",
    projectId: "ptrckmrgn-lechef",
    storageBucket: "ptrckmrgn-lechef.appspot.com",
    messagingSenderId: "156866203732"
  };
firebase.initializeApp(config);
const db = firebase.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);

export const FETCH_ITEMS = 'fetch_items';

export function fetchItems() {
    return dispatch => {
        db.collection('items').orderBy('updated_at', 'desc').onSnapshot(collection => {
            const items = {};
            collection.forEach(item => {
                items[item.id] = item.data();
            });
            dispatch({
                type: FETCH_ITEMS,
                items
            });
        });
    }
}