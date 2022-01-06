//require('./bootstrap');
//require('./components/Header');
//require('./components/Index');
//require('./components/Login');


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Index from './components/Index';
import Services from './components/Services';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <h1 className='py-5'> App here!</h1>

                <Routes>
                    <Route path="/index" element={<Index />} />
                    <Route path="/services" element={<Services />} />
                </Routes>

            </Router>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

