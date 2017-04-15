import React, {PureComponent, PropTypes} from 'react';
import {EVENT_PROP_TYPE} from './constants';
import {MILLISECONDS_HOUR} from '../utils/constants';

import './TimeSlotEvent.css';

export default class TimeSlotEvent extends PureComponent {
    static propTypes = {
        event: EVENT_PROP_TYPE.isRequired,
        onSelect: PropTypes.func.isRequired,
    }

    render() {
        let {
            event: {title, color, start},
            onSelect,
        } = this.props;

        // TODO: Need a way to determine that the event is in the past so that it
        // can be displayed faded-out
        // COMPLETED
        let _isPastEvent = () => {
            return start < (Date.now() - MILLISECONDS_HOUR);
        };

        return (
            <button 
                className={`time-slot-event time-slot-event--${color} ${_isPastEvent() ? 'time-slot-event--past' : ''}`} 
                onClick={onSelect}
            >
                {title}
            </button>
        );
    }
}
