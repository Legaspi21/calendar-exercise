import React, {PureComponent, PropTypes} from 'react';
import {EVENT_PROP_TYPE} from './constants';
import {getDisplayDate, getDisplayHour} from '../utils';

import './EventDetailOverlay.css';

export default class EventDetailOverlay extends PureComponent {
    static propTypes = {
        event: EVENT_PROP_TYPE.isRequired,
        onClose: PropTypes.func.isRequired
    }

    componentDidMount() {
        let {onClose} = this.props;

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                onClose();
                return;
            }
        });

        this._setLabelColor();
    }

    componentDidUpdate() {
        this._setLabelColor();

    }

    _setLabelColor() {
        let {event} = this.props;
        let {color} = event;
        const colors = {
            'sky': '#d1e8f0',
            'canary': '#fcf69a',
            'rose': '#fcbbd2',
            'shamrock': '#009e60',
        };

        document.documentElement.style.setProperty('--background-color', colors[color]);
    }

    render() {
        let {event, onClose} = this.props;
        let {title, description, start, color, hours} = event;
        let displayDate = getDisplayDate(start);
        let startHour = (new Date(start)).getHours();
        // TODO: Fix. If hours was other than 1 the UI would break
        let endHour = startHour + hours;

        let startHourDisplay = getDisplayHour(startHour);
        let endHourDisplay = getDisplayHour(endHour);

        let displayDateTime = `${displayDate} ${startHourDisplay} - ${endHourDisplay}`;

        // TODO: The event label color should match the event color
        // COMPLETE
        // TODO: Add appropriate ARIA tags to overlay/dialog
        // TODO: Support clicking outside of the overlay to close it
        // TODO: Support clicking ESC to close it
        // COMPLETE
        return (
            <section className="event-detail-overlay">
                <div className="event-detail-overlay__container">
                    <button
                        className="event-detail-overlay__close"
                        title="Close detail view"
                        onClick={onClose}
                    />
                    <div>
                        {displayDateTime}
                        <span
                            className="event-detail-overlay__color"
                            title={`Event label color: ${color}`}
                        />
                    </div>
                    <h1 className="event-detail-overlay__title">
                        {title}
                    </h1>
                    <p>{description}</p>
                </div>
            </section>
        );
    }
}
