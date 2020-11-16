import { makeAutoObservable } from 'mobx';

let id = 0;
export default class Board {
    items = [];
    title = '';
    content = '';
    constructor() {
        makeAutoObservable(this);
    }
    add(board) {
        this.items.push({
            ...board,
            id: id++,
        });
        this.title = '';
        this.content = '';
    }
    setTitle(title) {
        this.title = title;
    }
    setContent(content) {
        this.content = content;
    }
}
