import { makeAutoObservable, action, runInAction } from 'mobx';
import axios from 'axios';

export default class Chat {
    status = 'idle';
    items = [];
    isLoaded = false;
    constructor() {
        makeAutoObservable(this);
    }

    init() {
        this.status = 'idle';
        this.items = [];
        this.isLoaded = false;
    }

    // action ( makeAutoObservable )
    fetchItem() {
        this.status = 'pending';
        apiCall().then((newChat) => {
            this.items.push(newChat);
            this.status = 'done';
            this.isLoaded = true;
        });
    }

    fetchItemAction() {
        this.status = 'pending';
        apiCall().then(
            action((newChat) => {
                this.items.push(newChat);
                this.status = 'done';
            })
        );
    }

    fetchItem3() {
        this.status = 'pending';
        apiCall().then((newChat) => {
            runInAction(() => {
                this.items.push(newChat);
                this.status = 'done';
                this.isLoaded = true;
            });
        });
    }
}

function apiCall() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos/${1}`).then(({ data }) => data);
}
