import React, {PureComponent} from 'react';
import {MILLISECONDS_MINUTE} from '../utils/constants';

import './LineIndicator.css';

export default class LineIndicator extends PureComponent {
    state = {
        currentMinute: new Date().getMinutes()
    }

    componentDidMount() {
        setInterval(() => {
            this.setState(() => {
                return {currentMinute: new Date().getMinutes()};
            });
        }, MILLISECONDS_MINUTE);
    }

    _currentMinute() {
        return new Date().getMinutes();
    }

    _currentLinePosition() {
        let currentMinute = this._currentMinute();
        let currentPosition = (currentMinute / 60) * 100;

        return currentPosition;
    }

    render() {
        return <hr className="line-indicator" style={{top: `${this._currentLinePosition()}%`}} />;
    }
}

