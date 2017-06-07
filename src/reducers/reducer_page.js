import {DAY_CHANGED, EVENT_SELECTED, FETCH_EVENTS, TODAY_SELECTED, COLOR_SELECTED} from '../actions/types';

const INITIAL_STATE = {
    // unfiltered list of events
    events: [],
    
    // The currently selected day represented by numerical timestamp 
    day: Date.now(),

    // The currently selected event in the agenda 
    selectedEventId: undefined,

    // The currently selected color corresponding to events in the agenda
    selectedColor: null
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_EVENTS:
            return {...state, events: action.payload};
        case DAY_CHANGED:
            let {day} = state;
            let currentDate = new Date(day);
            let newDay = currentDate.setDate(currentDate.getDate() + action.payload);
            
            return {...state, day: newDay};
        case TODAY_SELECTED:
            return {...state, day: Date.now()};
        case EVENT_SELECTED:
            return {...state, selectedEventId: action.payload};
        case COLOR_SELECTED:
            return {...state, selectedColor: action.payload};
        default:
            return state;
    }
}