// Helpful constants for doing math on numeric timestamps

export const MILLISECONDS_SECOND = 1000;
export const SECONDS_MINUTE = 60;
export const MINUTES_HOUR = 60;
export const HOURS_DAY = 24;
export const MILLISECONDS_MINUTE = MILLISECONDS_SECOND * SECONDS_MINUTE;
export const MILLISECONDS_DAY = MILLISECONDS_SECOND * SECONDS_MINUTE * MINUTES_HOUR * HOURS_DAY;
export const MILLISECONDS_HOUR = MILLISECONDS_DAY / HOURS_DAY;
