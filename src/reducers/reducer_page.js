import DATA_SET from '../utils/data';
import {DAY_CHANGED, EVENT_SELECTED} from '../actions/types';

const INITIAL_STATE = {
    // unfiltered list of events
    events: DATA_SET,
    
    // The currently selected day represented by numerical timestamp 
    day: Date.now(),

    // The currently selected event in the agenda 
    selectedEventId: undefined
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case DAY_CHANGED:
            return {...state, day: action.payload};
        case EVENT_SELECTED:
            return {...state, selectedEventId: action.payload};
        default:
            return state;
    }
}