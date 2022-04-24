import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { countStore, targetStore, useStoreGithub } from './store';
import shallow from 'zustand/shallow';

function App() {
    // state
    const isNumber = countStore(state => state.isNumber);
    const target = targetStore(state => state.target, shallow);
    const userData = useStoreGithub(state => state.data);

    // action
    const addcount = countStore(state => state.setAddcount);
    const discount = countStore(state => state.setDiscount);
    const setTarget = targetStore(state => state.setTarget);
    const getData = useStoreGithub(state => state.fetch);

    console.log(userData);

    const [state, setState] = useState({
        name: '',
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const getUserData = data => {
        getData(data);
    };

    console.log(state);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
                <div>{isNumber}</div>
                <button onClick={() => addcount()}>Add</button>
                <button onClick={() => discount()}>minus</button>
                <br />
                <div>{target}</div>
                <button onClick={() => setTarget()}>setTarget</button>
                <br />
                <button onClick={() => getUserData(state.name)}>get</button>
                <br />
                <input type="text" name="name" onChange={e => handleChange(e)} />
            </header>
        </div>
    );
}

export default App;
