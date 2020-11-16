import React from 'react';
import { useObserver } from 'mobx-react';
import { useStore } from '../store';
import Header from './Header';

// observer
const Write = () => {
    const { board } = useStore();
    const setTitle = (e) => board.setTitle(e.currentTarget.value);
    const setContent = (e) => board.setContent(e.currentTarget.value);
    const addBoard = () => board.add({ title: board.title, content: board.content });
    return useObserver(() => (
        <div>
            <Header />
            <h1>write</h1>
            <div>
                title:
                <input value={board.title} onChange={setTitle} />
            </div>
            <div>
                content:
                <input value={board.content} onChange={setContent} />
            </div>
            <button onClick={addBoard}>add</button>
        </div>
    ));
};

export default Write;
