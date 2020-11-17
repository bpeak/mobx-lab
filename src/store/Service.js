import { makeAutoObservable } from 'mobx';
import axios from 'axios';

export default class Service {
    count = 0;
    items = [];
    constructor() {
        makeAutoObservable(this);
    }
    increaseCount() {
        console.log('DDD');
        this.count++;
    }
    getData(id) {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then(({ data }) => {
            this.items.push(data);
            console.log(this.items);
        });
    }
}
