import React from 'react';

import Button from './Button';

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            running: false,
            elapsed: 0,
            lastTick: 0
        };

        this.handleStart = this.handleStart.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        if (this.state.running) {
            const now = Date.now();
            const diff = now - this.state.lastTick;

            this.setState({
                elapsed: this.state.elapsed + diff,
                lastTick: now
            });
        }
    }

    handleStart() {
        this.setState({
            running: true,
            lastTick: Date.now()
        });
    }

    handlePause() {
        this.setState({ running: false });
    }

    handleStop() {
        this.setState({
            running: false,
            elapsed: 0,
            lastTick: 0
        });
    }

    format(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        return `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
    }

    render() {
        const time = this.format(this.state.elapsed);

        return (
            <section className="stopwatch">
                <div className="stopwatch-time">{time}</div>

                <div className="stopwatch-controls">
                    {this.state.running ?
                        <Button className="icon" icon="pause" onClick={this.handlePause} />
                        :
                        <Button className="icon" icon="play_arrow" onClick={this.handleStart} />
                    }
                    
                    <Button className="icon" icon="stop" onClick={this.handleStop} />
                </div>
            </section>
        );
    }
}

export default Stopwatch;