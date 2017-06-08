import React, {PureComponent, PropTypes} from 'react';
import {connect} from 'react-redux';
import {EVENTS_PROP_TYPE} from './constants';
import {getDisplayHour} from '../utils';
import TimeSlotEvent from './TimeSlotEvent';
import LineIndicator from './LineIndicator';

import './TimeSlot.css';

class TimeSlot extends PureComponent {
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

    _renderLineIndicator() {
        const {day, hour} = this.props;
        const todaysDate = new Date().setHours(0, 0, 0, 0);
        const agendaDate = new Date(day).setHours(0, 0, 0, 0);
        const currentHour = new Date().getHours();

        return (currentHour === hour) && todaysDate === agendaDate ? <LineIndicator /> : null;
    }

    render() {
        let {hour} = this.props;
        let displayHour = getDisplayHour(hour);

        return (
            <section className="time-slot">
                <span className="time-slot__hour-label">
                    {displayHour}
                </span>
                <div className="time-slot__events">
                    {this._renderLineIndicator()}
                    {this._renderEvents()}
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    const {day} = state.page;

    return {day};
};

export default connect(mapStateToProps)(TimeSlot);
