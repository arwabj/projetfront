
import axios from "axios";

import { FAIL_EVENTS, GET_EVENT, GET_EVENTS, LOAD_EVENTS } from "../ActionsTypes/ActTEvent"

// GET ALL EVENTS
export const getEvents = () => async (dispatch) => {
    dispatch ({ type: LOAD_EVENTS});
    try {
        let result = await axios.get("/api/event/allevent");
        dispatch({ type: GET_EVENTS, payload: result.data});
    } catch (error) {
        dispatch({type: FAIL_EVENTS, payload: error.response});
        
    }
};
// add event
export const addEvent = (newEvent) => async (dispatch) => {
    try {
        await axios.post("/api/event/", newEvent);
        dispatch(getEvents());
    } catch (error) {
        dispatch({ type: FAIL_EVENTS, payload: error.response});
        
    }
};
// edit event
export const editEvent = (id, newEvent) => async (dispatch) => {
    try {
        await axios.put(`/api/event/${id}`, newEvent);
        dispatch(getEvents());
    } catch (error) {
        dispatch({ type: FAIL_EVENTS, payload: error.response});
        
    }
};
// get one event

export const getEvent = (id) => async (dispatch) => {
    dispatch({ type: LOAD_EVENTS});
    try {
        let result = await axios.get(`/api/event/${id}`);
        dispatch({ type: GET_EVENT, payload: result.data});
    } catch (error) {
        dispatch({ type: FAIL_EVENTS, payload: error.response});
        
    }
};

// delete event

export const deleteEvent = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/event/${id}`)
        dispatch(getEvents())
    } catch (error) {
        dispatch({ type: FAIL_EVENTS, payload:error.response})
        
    }
};