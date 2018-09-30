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
        db.collection('items').orderBy('created_at').onSnapshot(collection => {
            const items = {};
            collection.forEach(item => {
                items[item.id] = item.data();
                items[item.id].id = item.id;
            });
            dispatch({
                type: FETCH_ITEMS,
                items
            });
        });
    }
}

export function addItem(quantity, name) {
    return dispatch => {
        const item = {
            quantity,
            name,
            checked: false,
            created_at: firebase.firestore.FieldValue.serverTimestamp(),
            updated_at: firebase.firestore.FieldValue.serverTimestamp()
        };

        db.collection('items').add(item);
    }
}

export function updateItem(id, update) {
    update.updated_at = firebase.firestore.FieldValue.serverTimestamp();
    return dispatch => {
        db.collection('items').doc(id).update(update);
    }
}

export function deleteItems(items) {
    return dispatch => {
        const batch = db.batch();
        items.forEach(item => {
            batch.delete(db.collection('items').doc(item.id))
        });
        return batch.commit();
    }
}