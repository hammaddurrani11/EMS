import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    }
    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className='border-2 p-20 border-emerald-600 rounded-xl'>
                <form onSubmit={submitHandler} className='flex flex-col items-center justify-center gap-3'>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-10 rounded-full text-xl placeholder:text-gray-400'
                        type='email'
                        placeholder='Enter your Email'
                        required />

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-10 rounded-full text-xl placeholder:text-gray-400'
                        type='password'
                        placeholder='Enter Password'
                        required />

                    <button
                        className='text-black cursor-pointer outline-none bg-emerald-600 py-3 px-10 rounded-full text-xl placeholder:text-white'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login