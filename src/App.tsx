import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { useUserInfoStore } from './store';

function App() {
    const onLogin = useUserInfoStore(state => state.onLogin);
    const [state, setState] = useState({
        username: '',
    });

    const handleChange = (e: any) => {
        setState({
            username: e.target.value,
        });
    };

    const handleSubmit = (data: string) => {
        onLogin(data);
        setState({
            username: '',
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
                <input type="text" name="username" onChange={e => handleChange(e)} value={state.username} />
                <button onClick={() => handleSubmit(state.username)}>눌러봐</button>
            </header>
        </div>
    );
}

export default App;
