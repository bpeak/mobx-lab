import { makeAutoObservable, makeObservable, observable } from 'mobx';

let id = 0;
export default class Board {
    items = [];
    title = '';
    content = '';
    constructor() {
        makeAutoObservable(this);
    }
    setTitle(title) {
        this.title = title;
    }
    setContent(content) {
        this.content = content;
    }
    add(board) {
        this.items.push({
            ...board,
            id: id++,
        });
        this.title = '';
        this.content = '';
    }
}
