import React from 'react';
import './Login.css';

const Login = () => {
    return(
        <div className='login__container'>
            <h3>Bienvenido !</h3>
            <h5>Seguimiento a tu plan de 90 Días</h5>
            <a className='login__authentication' href='http://localhost:9000/auth/google'>
                <img src="./img/google-icon.svg"/>
                <span>Ingresa con tu cuenta Google</span>
            </a>
        </div>
    );
}

export default Login;

