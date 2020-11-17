import { makeObservable, action, observable, runInAction, makeAutoObservable } from 'mobx';

const colors = ['red', 'blue', 'green'];
let i = 0;
export default class Rect {
    width = 10;
    height = 10;
    color = colors[0];
    constructor() {
        makeObservable(this, {
            width: observable,
            height: observable,
            color: observable,
            setSize: action, // transaction(batch)
        });
        // makeAutoObservable(this)
    }

    setSize(size) {
        this.width = size;
        this.height = size;
        this.color = colors[++i % 3];
    }
}
