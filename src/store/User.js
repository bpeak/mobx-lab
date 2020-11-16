import { makeAutoObservable } from 'mobx';

export default class User {
    isLogin = false;
    name = '';
    constructor() {
        makeAutoObservable(this);
    }
    login(name) {
        this.isLogin = true;
        this.name = name;
    }
    logout() {
        this.isLogin = false;
        this.name = '';
    }
}
