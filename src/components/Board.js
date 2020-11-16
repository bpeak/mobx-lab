import React from 'react';
import { useStore } from '../store';
import Header from './Header';

// no observer
const Board = () => {
    const { board } = useStore();
    return (
        <div>
            <Header />
            <h1>boards</h1>
            {board.items.map((board) => (
                <div key={board.id}>
                    title: {board.title}
                    content: {board.content}
                </div>
            ))}
        </div>
    );
};

export default Board;
