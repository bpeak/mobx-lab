import React, { useEffect } from 'react';
import { makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';

class Timer {
    hours = 0;
    seconds = 0;
    minutes = 0;
    constructor() {
        makeObservable(this, {
            hours: observable,
            seconds: observable,
            minutes: observable,
        });
        // makeAutoObservable(this);
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
}

const timer = new Timer();

const App = observer(({ timer }) => {
    console.log('rerender ' + Date.now());
    useEffect(() => {
        console.log(timer.seconds);
    }, []);
    return (
        <div>
            <h1>timer</h1>
            <div>
                <span>{timer.hours}시</span>
                <span>{timer.minutes}분</span>
                {/* <span>{timer.seconds}</span> */}
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
