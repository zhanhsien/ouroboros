import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import EditorMenu from './components/editor/editor-menu';
import EditorPanel from './components/editor/editor-panel';

class App extends Component {
    render() {
        return (
            <div className="App">
                <EditorMenu/>
                <EditorPanel/>
            </div>
        );
    }
}

export default App;