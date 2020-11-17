import React from 'react';
import Header from './Header';
import { useObserver } from 'mobx-react';
import { useStore } from '../store';

function Service() {
    const { service } = useStore();
    const getData = () => {
        service.getData(1 + Math.floor(Math.random() * 100));
    };
    const increaseCount = () => service.increaseCount();
    return useObserver(() => (
        <div>
            <Header />
            <h1>service {service.count}</h1>
            <button onClick={getData}>get data</button>
            <button onClick={increaseCount}>increase count</button>
            {service.items.map((item, i) => (
                <div key={i}>{item.title}</div>
            ))}
        </div>
    ));
}

export default Service;
