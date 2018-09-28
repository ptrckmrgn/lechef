import {
    FETCH_ITEMS
} from '../actions/firebase';

const initialState = {
    items: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_ITEMS:
            return {
                ...state,
                items: action.items
            }
        default:
            return state;
    }
}