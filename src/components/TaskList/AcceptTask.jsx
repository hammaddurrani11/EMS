import React from 'react'

const AcceptTask = () => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl px-3 py-2'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam fugit itaque saepe minima animi dignissimos?</p>
            <div className='flex justify-between mt-5'>
                <button className='bg-green-500 py-1 px-2 text-sm rounded cursor-pointer'>Mark as Complete</button>
                <button className='bg-red-500 py-1 px-2 text-sm rounded cursor-pointer'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask