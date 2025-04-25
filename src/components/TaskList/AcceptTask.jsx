import React from 'react'

const AcceptTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-500 rounded-xl px-3 py-2'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>
            <div className='flex justify-between mt-5'>
                <button className='bg-green-500 py-1 px-2 text-sm rounded cursor-pointer'>Mark as Complete</button>
                <button className='bg-red-500 py-1 px-2 text-sm rounded cursor-pointer'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask