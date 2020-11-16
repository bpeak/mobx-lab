import React from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';

class Timer {
    hours = 0;
    seconds = 0;
    minutes = 0;
    constructor() {
        makeAutoObservable(this);
    }
    increaseHour() {
        this.hours += 1;
    }
    increaseSeconds() {
        console.log('increaseSeconds ' + this.seconds);
        this.seconds += 1;
    }

    increaseMinutes() {
        this.minutes += 1;
    }

    reset() {
        this.minutes = 0;
        this.seconds = 0;
    }
}

const timer = new Timer();

const App = observer(({ timer }) => {
    console.log('rerender ' + Date.now());
    return (
        <div>
            <h1>timer</h1>
            <div>
                {timer.hours}시 {timer.minutes}분
            </div>
            <button onClick={() => timer.increaseHour()}>+시</button>
            <button onClick={() => timer.increaseMinutes()}>+분</button>
            <button onClick={() => timer.increaseSeconds()}>+초</button>
        </div>
    );
});

setInterval(() => {
    timer.increaseSeconds();
}, 1000);

export default () => <App timer={timer} />;
