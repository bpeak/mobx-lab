import React, { useRef, useEffect } from 'react';
import { useStore } from '../store';
import { Observer, useObserver } from 'mobx-react';
import userEvent from '@testing-library/user-event';

// https://github.com/mobxjs/mobx-react/issues/505

export default function Rect() {
    const inputRef = useRef();
    const { rect } = useStore();
    const change = () => {
        rect.setSize(Number(inputRef.current.value));
    };

    useEffect(() => {
        setTimeout(() => {
            rect.setSize(30);
        }, 1000);
    }, []);

    return (
        <Observer>
            {() => {
                console.log(rect.width, rect.height, rect.color);
                return (
                    <div>
                        <h1>rect</h1>
                        <div
                            style={{
                                backgroundColor: rect.color,
                                width: rect.width,
                                height: rect.height,
                            }}
                        ></div>
                        <input ref={inputRef} />
                        <button onClick={change}>change</button>
                    </div>
                );
            }}
        </Observer>
    );
}
