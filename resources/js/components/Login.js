import React from 'react';
import ReactDOM from 'react-dom';

function Login() {
    return (
            <div className="loginblock">
                <div className="card-body">login here!</div>
            </div>
    );
}

export default Login;

if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}
