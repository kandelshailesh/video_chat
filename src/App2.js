import React from 'react';
import Video from './Video';
import './App.css'


const App = () =>
{
    return (<div className="app">
        <div className="app__videos">
            <Video></Video>
            <Video></Video>
            <Video></Video>
            <Video></Video>
        </div>
    </div>);
}

export default App;