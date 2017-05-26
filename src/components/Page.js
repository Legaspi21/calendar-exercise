import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {dayChanged, eventSelected, fetchEvents} from '../actions';
import Calendar from './Calendar';
import EventDetailOverlay from './EventDetailOverlay';
import {filterEventsByDay, getEventFromEvents, getDisplayDate} from '../utils';

import './Page.css';

const DayNavigator = ({dateDisplay, onPrev, onNext}) => {
    return (
        <nav className="page__nav">
            <button
                className="page__nav-button page__prev-day"
                title="Go to previous day"
                onClick={onPrev}
            />
            <h2 className="page__date">{dateDisplay}</h2>
            <button
                className="page__nav-button page__next-day"
                title="Go to next day"
                onClick={onNext}
            />
        </nav>
    );
};

class Page extends PureComponent {
    componentWillMount() {
        this.props.fetchEvents();
    }
    
    _handleSelectEvent(selectedEventId) {
        this.props.eventSelected(selectedEventId);
    }

    _handleEventDetailOverlayClose() {
        this.props.eventSelected({selectedEventId: undefined});
    }

    _handlePrev() {
        this.props.dayChanged(-1);
    }

    _handleNext() {
        this.props.dayChanged(1);
    }

    render() {
        let {events, day, selectedEventId} = this.props;
        let filteredEvents = filterEventsByDay(events, day);
        let selectedEvent = getEventFromEvents(events, selectedEventId);
        let eventDetailOverlay;

        if (selectedEvent) {
            eventDetailOverlay = (
                <EventDetailOverlay
                    event={selectedEvent}
                    onClose={this._handleEventDetailOverlayClose.bind(this)}
                />
            );
        }

        return (
            <div className="page">
                <header className="page__header">
                    <h1 className="page__title">Daily Agenda</h1>
                </header>
                <DayNavigator
                    dateDisplay={getDisplayDate(day)}
                    onPrev={this._handlePrev.bind(this)}
                    onNext={this._handleNext.bind(this)}
                />
                <Calendar events={filteredEvents} onSelectEvent={this._handleSelectEvent.bind(this)} />
                {eventDetailOverlay}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {events, day, selectedEventId} = state.page;
    return {events, day, selectedEventId};
};

export default connect(mapStateToProps, { 
    dayChanged, 
    eventSelected,
    fetchEvents
})(Page);