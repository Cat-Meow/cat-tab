import React, { Component } from 'react';
import { setClass } from 'rs-util';

class Content extends Component {
    static propTypes = {
        prefixName: React.PropTypes.string
    }

    static defaultProps = {
        prefixName: 'salt'
    }

    render() {
        let { prefixName, eventKey, liveKey } = this.props,
            className = setClass(`${prefixName}-tab-pane`, 'fade', {
                'active in': liveKey === eventKey
            });

        return (
            <div className={className}>
                {this.props.children}
            </div>
        );
    }
}

export default Content;
