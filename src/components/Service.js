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
            {service.items.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
            <button onClick={getData}>get data</button>
            <button onClick={increaseCount}>increase count</button>
        </div>
    ));
}

export default Service;
