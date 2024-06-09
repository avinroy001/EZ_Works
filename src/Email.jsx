import React, { useState } from 'react';
import axios from 'axios';
import "./Email.css";

const Email = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');

    const handleClick = async (e) => {
        e.preventDefault();
        const data = { email: email };

        try {
            const res = await axios.post("https://34.225.132.160:8002/api", data);
            console.log(res);
            setError('');
            setMsg("Form Submitted"); 
        } catch (err) {
            console.error(err);
            if (err.response && err.response.status === 422) {
                setError('Email addresses ending with @ez.works are not allowed.');
                setMsg("");
            } else {
                setError('An error occurred. Please try again.');
                setMsg("");
            }
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (value.endsWith('@ez.works')) {
            setError('Email addresses ending with @ez.works are not allowed.');
        } else {
            setError('');
        }
    };

    return (
        <form onSubmit={handleClick}>
            <input
                id="email"
                className="emailid"
                type='email'
                placeholder='Email Address'
                value={email}
                onChange={handleEmailChange}
                required
            />
            <button type='submit' className='btn'>Contact me</button>
            {error && <div className="error">{error}</div>}
            {msg && <div className="msg">{msg}</div>}
            
        </form>
    );
};

export default Email;
