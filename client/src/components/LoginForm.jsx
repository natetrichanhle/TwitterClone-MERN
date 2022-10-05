import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

import styles from '../static/css/LoginSignup.module.css'
import logo from '../static/images/twitterlogo.webp'

const LoginForm = ({ setUser }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/login",
            JSON.stringify({
                email,
                password,
            }),
            {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            })
            .then(res => {
                setUser(res.data.user)
                navigate("home");
                console.log(res);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.container}>
            <img src={logo} alt="logo" />
            <h1>Log In!</h1>
            <form onSubmit={loginUser} className={styles.form}>
                <input
                    type="text"
                    value={email} 
                    name="email"
                    placeholder="Email"
                    onChange={(e) => { setEmail(e.target.value) }} 
                    className={styles.formInput}    
                />
                <input
                    type="password"
                    value={password}
                    name="password"
                    placeholder="Password"
                    onChange={(e) => { setPassword(e.target.value) }}
                    className={styles.formInput}    
                />
                <input
                    type="submit" placeholder="Log In" className={styles.submit}
                />
            </form>
            <Link to="/signup" className={styles.route}>
                Don't have an account? <span className={styles.blue}>Sign up here.</span>
            </Link>
        </div>
    )
}

export default LoginForm