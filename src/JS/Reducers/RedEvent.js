//initialState

import { FAIL_EVENTS, GET_EVENT, GET_EVENTS, LOAD_EVENTS } from "../ActionsTypes/ActTEvent";


const initialState = {
    event: [],
    errors: null,
    load: false,
    eventToGet: {},
};

//pure functions

const eventReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_EVENTS :
            return { ...state, load: true};
        case GET_EVENTS:
            return { ...state, load: false, event: payload.event};
        case GET_EVENT:
            return { ...state, load: false, eventToGet: payload.eventToGet};
        case FAIL_EVENTS:
            return { ...state, load: false, errors: payload};            
            
        default:
            return state;
    }
};

export default eventReducer;