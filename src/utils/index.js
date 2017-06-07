/**
 * Given a list of events and a date, filter the events down to those that
 * fall on the same day as the date
 * @param {array} events - List of event objects
 * @param {Date} timestamp - The timestamp representing the day to match
 * @returns {array}
 */
export const filterEventsByDay = (events, timestamp) => (
    // TODO: Implement day filtering!
    // COMPLETE
    events.filter(({start}) => {
        let currentDateAtMidnight = new Date(timestamp).setHours(0, 0, 0, 0);
        let eventDateAtMidnight = new Date(start).setHours(0, 0, 0, 0);

        return currentDateAtMidnight === eventDateAtMidnight;
    })
);

/**
 * Given a list of events and a color, filter the events down to the given color
 * @param {array} events - List of event objects
 * @param {String} color - The currently selected color
 * @returns {array}
 */
export const filterEventsByColor = (events = [], color) => (
    events.filter((event = {}) => (event.color === color))
);

/**
 * Given a list of events, create a set with unique colors
 * @param {array} events - List of event objects
 * @returns {array}
 */
export const colorsSet = (events = []) => {
    const set = new Set(events.map((event = {}) => event.color));
    const colors = [];

    for(let color of set) {
        colors.push(color);
    }
    return colors;
};

/**
 * Given a list of events and an hour number, filter the events down to those that
 * start on the specified hour
 * @param {array} events - List of event objects
 * @param {number} hour - The hour to match (0 - 23)
 * @param {array}
 * @returns {array}
 */
export const filterEventsByHour = (events, hour) => (
    events.filter(({start}) => (
        new Date(start)).getHours() === hour
    )
);

/**
 * Given a numerical timestamp, returns the formatted date string w/o time component
 * @param {number} timestamp - The date to format
 * @returns {string} The formatted date
 */
export const getDisplayDate = (timestamp) => {
    let date = new Date(timestamp);
    const options = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    };

    // TODO: Format the date like: "Tuesday, April 11, 2017"
    // COMPLETE
    return date.toLocaleString('en-US', options);
};

/**
 * Given an hour number, returns a display string version
 * @param {number} hour - The hour
 * @returns {string}
 */
// TODO: Implement using a more programmatic approach instead of map
// COMPLETE
export const getDisplayHour = (hour) => {
    if (hour === 0 || hour === 12) {
        return `12${hour === 0 ? 'AM' : 'PM'}`;
    }

    return `${hour % 12}${hour < 12 ? 'AM' : 'PM'}`;
};

/**
 * Given a list of events, returns the event object whose id matches the specified eventId
 * @param {array} events - List of event objects
 * @param {number} eventId - ID of event to find
 * @returns {object}
 */
export const getEventFromEvents = (events, eventId) => (
    events.find(({id}) => id === eventId)
);

