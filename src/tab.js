import React, { Component } from 'react';
import { setClass } from 'rs-util';
import Panel from './nav';
import Content from './content';

class Tab extends Component {
    static propTypes = {
        liveKey: React.PropTypes.string,
        prefixName: React.PropTypes.string,
        myStyle: React.PropTypes.string,
        stacked: React.PropTypes.bool,
        justified: React.PropTypes.bool
    }

    static defaultProps = {
        prefixName: 'salt',
        myStyle: 'tabs',    //tabs/pills
        stacked: false,
        justified: false
    }

    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    state = {
        liveKey: this.props.liveKey
    }
    
    componentWillReceiveProps(nextProps) {
        let { liveKey } = nextProps;
        if (this.state.liveKey !== liveKey) {
            this.setState({
                liveKey: liveKey
            });
        }
    }

    handleSelect(key) {
        this.setState({
            liveKey: key
        });
    }

    renderNavs() {
        let self = this;

        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                liveKey: self.state.liveKey,
                onClick: self.handleSelect,
                extraCallBack: self.props.onSelect
            });
        });
    }

    renderContent() {
        let self = this;

        return this.props.children[0].props.children && (
            <div className={`${this.props.prefixName}-tab-content`}>
                {
                    React.Children.map(this.props.children, child => {
                        return (
                            <Content
                                liveKey={self.state.liveKey}
                                prefixName={self.props.prefixName}
                                eventKey={child.props.eventKey}
                            >
                                {child.props.children}
                            </Content>
                        );
                    })
                }
            </div>
        );
    }

    render() {
        let { prefixName, myStyle, stacked, justified } = this.props,
            classNames = setClass(`${prefixName}-nav`, `${prefixName}-nav-${myStyle}`, {
                [`${prefixName}-nav-stacked`]: stacked,
                [`${prefixName}-nav-justified`]: justified
            });

        return (
            <div className={`${prefixName}-tab-container`}>
                <ul className={classNames}>
                    {this.renderNavs()}
                </ul>
                {this.renderContent()}
            </div>
        );
    }
}

Tab.Panel = Panel;

export default Tab;
