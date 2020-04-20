import React, { Component } from 'react';
import './clock.css'


class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date()}
    }

    componentDidMount() {
        this.time = setInterval(() => {
            this.changeTime()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.time)
    }

    changeTime() {
        this.setState({ date: new Date() })
    }

    render() {
        return (
            <div className="dateClock">
                <p>Date: {this.state.date.toLocaleDateString()}</p>
                <p>Time: {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock;