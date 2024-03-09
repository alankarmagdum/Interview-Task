import React, {  useState } from 'react';
import './Login.css';


function Login() {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    

    const handlesubmit = (event) => {
        event.preventDefault();

        console.log('username', username);
        console.log('password', password);
        
        
    }

    return (
        <>
            <h1>Login page</h1>
            <form onSubmit={handlesubmit} className='main-form'>
               

                <label className='label'>
                username:
                    <input className='input'
                        type='text'
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                    />
                </label>
                <br/>

                <label  className='label'>
                password:
                    <input  className='input'
                        type='password'
                        value={password}
                        onChange={(e) => setpassword(e.target.value)} />

                </label>
                <br/>

                <button type='submit'>Login</button>
                


            </form>
        </>
    )
}
export default Login;