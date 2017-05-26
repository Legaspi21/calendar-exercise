import {DAY_CHANGED, EVENT_SELECTED, FETCH_EVENTS} from './types';
import DATA_SET from '../utils/data';

export const dayChanged = (dayDelta) => {
    return {
        type: DAY_CHANGED,
        payload: dayDelta
    };
};

export const eventSelected = (selectedEventId) => {
    return {
        type: EVENT_SELECTED,
        payload: selectedEventId
    };
};

export const fetchEvents = () => {
    return {
        type: FETCH_EVENTS,
        payload: DATA_SET
    };
};
