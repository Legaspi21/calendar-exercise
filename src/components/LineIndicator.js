import React, {PureComponent} from 'react';

import './LineIndicator.css';

export default class LineIndicator extends PureComponent {
    _currentLinePosition() {
        let currentMinute = new Date(Date.now()).getMinutes();
        let currentPosition = (currentMinute / 60) * 100;

        return currentPosition;
    }

    render() {
        return <hr className="line-indicator" style={{top: `${this._currentLinePosition()}%`}} />;
    }
}

