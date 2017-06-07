import React, {PureComponent, PropTypes} from 'react';
import {EVENTS_PROP_TYPE} from './constants';
import {getDisplayHour} from '../utils';
import TimeSlotEvent from './TimeSlotEvent';

import './TimeSlot.css';

class LineIndicator extends PureComponent {
    _currentLinePosition() {
        let currentMinute = new Date(Date.now()).getMinutes();
        let currentPosition = (currentMinute / 60) * 100;

        return currentPosition;
    }

    render() {
        return <hr className="line-indicator" style={{top: `${this._currentLinePosition()}%`}} />;
    }
}

export default class TimeSlot extends PureComponent {
    static propTypes = {
        hour: PropTypes.number.isRequired,
        events: EVENTS_PROP_TYPE.isRequired,
        onSelectEvent: PropTypes.func.isRequired,
    }

    _renderEvents() {
        let {events, onSelectEvent} = this.props;

        return events.map((event) => (
            <div key={event.id} className="time-slot__event">
                <TimeSlotEvent event={event} onSelect={onSelectEvent.bind(null, event.id)} />
            </div>
        ));
    }

    render() {
        let {hour} = this.props;
        let currentHour = new Date(Date.now()).getHours();
        let displayHour = getDisplayHour(hour);

        return (
            <section className="time-slot">
                <span className="time-slot__hour-label">
                    {displayHour}
                </span>
                <div className="time-slot__events">
                    {currentHour === hour ? <LineIndicator /> : null}
                    {this._renderEvents()}
                </div>
            </section>
        );
    }
}
