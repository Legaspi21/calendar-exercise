import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {dayChanged, eventSelected, fetchEvents, todaySelected, colorSelected} from '../actions';
import Calendar from './Calendar';
import EventDetailOverlay from './EventDetailOverlay';
import {
    filterEventsByDay, 
    getEventFromEvents, 
    getDisplayDate, 
    filterEventsByColor, 
    colorsSet
} from '../utils';

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
    
    _handleClick(value) {
        this.props.dayChanged(value);
    }

    _handleTodayButtonClick() {
        this.props.todaySelected();
    }

    _handleColorPickerButtonClick(selectedColor) {
        this.props.colorSelected(selectedColor);
    }

    _renderColorPicker(colors) {
        return colors.map((color) => (
            <button 
                className={`page__color-picker page__color-picker--${color}`}
                // style={{background: `${color}`}}
                onClick={this._handleColorPickerButtonClick.bind(this, color)}
                key={color} 
            />
        ));
    }

    render() {
        let {events, day, selectedEventId, selectedColor} = this.props;
        let filteredEvents = filterEventsByDay(events, day);
        let filteredEventsByColor = filterEventsByColor(filteredEvents, selectedColor);
        let selectedEvent = getEventFromEvents(events, selectedEventId);
        let colors = colorsSet(events);
        let eventDetailOverlay;

        if (selectedEvent) {
            eventDetailOverlay = (
                <EventDetailOverlay
                    event={selectedEvent}
                    onClose={this._handleEventDetailOverlayClose.bind(this)}
                />
            );
        }

        if (selectedColor) {
            filteredEvents = filteredEventsByColor;
        }

        return (
            <div className="page">
                <header className="page__header">
                    <button className="page__today-button" onClick={this._handleTodayButtonClick.bind(this)}>Today</button>
                    <h1 className="page__title">Daily Agenda</h1>
                </header>
                <button 
                    className="page__color-picker"
                    onClick={this._handleColorPickerButtonClick.bind(this, null)}
                />
                {this._renderColorPicker(colors)}
                <DayNavigator
                    dateDisplay={getDisplayDate(day)}
                    onPrev={this._handleClick.bind(this, -1)}
                    onNext={this._handleClick.bind(this, 1)}
                />
                <Calendar events={filteredEvents} onSelectEvent={this._handleSelectEvent.bind(this)} />
                {eventDetailOverlay}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {events, day, selectedEventId, selectedColor} = state.page;

    return {events, day, selectedEventId, selectedColor};
};

export default connect(mapStateToProps, { 
    dayChanged, 
    eventSelected,
    fetchEvents,
    todaySelected,
    colorSelected
})(Page);