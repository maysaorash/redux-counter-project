import {INCREASE_COUNT, DECREASE_COUNT} from '../actions/counterAction';

const initialState = {
    count: 0
}

function counterReducer(state = initialState, action) {
    switch (action.type.count) {
        case INCREASE_COUNT:
            return {count: state.count + action.payload.count};
        case DECREASE_COUNT:
            return {count: state.count - action.payload.count};
            default:
                return state;
    }
}

export default counterReducer;