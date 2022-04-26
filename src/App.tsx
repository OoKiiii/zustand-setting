import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { juno } from './store';

function App() {
    // action
    const onLogin = juno(state => state.onLogin);
    const setText = juno(state => state.setText);

    // state
    const getText = juno(state => state.isText);
    console.log(getText)

    const [state, setState] = useState({
        username: '',
        text: '',
    });

    const handleChange = (e: any) => {
        setState({
            ...state,
            username: e.target.value,
        });
    };

    const handleChange2 = (e: any) => {
        setState({
            ...state,
            text: e.target.value,
        });
    };

    const handleSubmit = (data: string) => {
        onLogin(data);
        setState({
            ...state,
            username: '',
        });
    };

    const handleSubmit2 = (data: string) => {
        setText(data);
        setState({
            ...state,
            text: '',
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
                {getText}
                <input type="text" name="username" onChange={e => handleChange(e)} value={state.username} placeholder="닉네임입력" />
                <button onClick={() => handleSubmit(state.username)}>눌러봐</button>
                <br />
                <input type="text" name="text" onChange={e => handleChange2(e)} value={state.text} placeholder="닉네임입력" />
                <button onClick={() => handleSubmit2(state.text)}>눌러봐</button>
            </header>
        </div>
    );
}

export default App;
