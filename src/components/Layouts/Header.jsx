import React from 'react'

const Header = () => {
    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '');
        window.location.reload()
    }
    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-semibold'>User 👋</span></h1>
            <button onClick={logOutUser} className='bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium cursor-pointer'>Log Out</button>
        </div>
    )
}

export default Header