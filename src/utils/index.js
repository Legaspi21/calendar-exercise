const _MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December',
];

const _DAYS_OF_THE_WEEK = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
];

/**
 * Given a list of events and a date, filter the events down to those that
 * fall on the same day as the date
 * @param {array} events - List of event objects
 * @param {Date} timestamp - The timestamp representing the day to match
 * @returns {array}
 */
export const filterEventsByDay = (events, timestamp) => {
    // TODO: Implement day filtering!
    // COMPLETE
    return (
        events.filter(({start}) => {
            let eventDate = new Date(start);
            let currentDate = new Date(timestamp);
    
            return (
                eventDate.getMonth() === currentDate.getMonth() && eventDate.getDate() === currentDate.getDate()
            );
        })
    );
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
    let month = _MONTHS[date.getMonth()];
    let year = date.getFullYear();
    let calendarDate = date.getDate();
    let weekday = _DAYS_OF_THE_WEEK[date.getDay()];
    let formattedDate = `${weekday}, ${month} ${calendarDate}, ${year}`;

    // TODO: Format the date like: "Tuesday, April 11, 2017"
    // COMPLETE
    return formattedDate;
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
