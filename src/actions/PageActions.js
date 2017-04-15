import {DAY_CHANGED, EVENT_SELECTED} from './types';

export const dayChanged = (day) => {
    return {
        type: DAY_CHANGED,
        payload: day
    };
};

export const eventSelected = (selectedEventId) => {
    return {
        type: EVENT_SELECTED,
        payload: selectedEventId
    };
};
