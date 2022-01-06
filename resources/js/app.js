//require('./bootstrap');
//require('./components/Header');
//require('./components/Index');
//require('./components/Login');


import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'

function App() {
    return (
        <div>
            <Header />
            <h1> App here!</h1>
        </div>
    );
}

export default App;


if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

