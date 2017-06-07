import {DAY_CHANGED, EVENT_SELECTED, FETCH_EVENTS, TODAY_SELECTED, COLOR_SELECTED} from './types';
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

export const todaySelected = () => {
    return {
        type: TODAY_SELECTED
    };
};

export const colorSelected = (selectedColor) => {
    return {
        type: COLOR_SELECTED,
        payload: selectedColor
    };
};
