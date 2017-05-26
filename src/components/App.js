import React, {PureComponent} from 'react';
import {Route} from 'react-router-dom';
import Page from './Page';
import EventDetailOverlay from './EventDetailOverlay';

export default class App extends PureComponent {
    render() {
        return (
            <Page>
                <Route path="/event/:id" component={EventDetail} />
            </Page>
        );
    }
}

const EventDetail = ({match}) => {
    <div>
        {match.params.id}
    </div>
}