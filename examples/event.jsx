import React, { Component } from 'react';
import Tab from '../src/tab.js';

export default class Example extends Component{
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(key) {
        console.log('选中' + key);
    }

    render() {
        return (
            <div>
                <Tab liveKey="1" onSelect={this.handleSelect}>
                    <Tab.Panel eventKey="1" tab="Tab1">1</Tab.Panel>
                    <Tab.Panel eventKey="2" tab="Tab2">2</Tab.Panel>
                    <Tab.Panel eventKey="3" tab="Tab3" disabled>3</Tab.Panel>
                </Tab>
                <Tab liveKey="2" myStyle="pills">
                    <Tab.Panel eventKey="1" tab="Tab1" />
                    <Tab.Panel eventKey="2" tab="Tab2" />
                    <Tab.Panel eventKey="3" tab="Tab3" disabled />
                </Tab>
                <Tab liveKey="2" myStyle="pills">
                    <Tab.Panel eventKey="1" tab="Tab1" href="https://github.com/react-salt/rs-tab"/>
                    <Tab.Panel eventKey="2" tab="Tab2" />
                    <Tab.Panel eventKey="3" tab="Tab3" disabled />
                </Tab>
            </div>
        );
    }
};
