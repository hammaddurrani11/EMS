import React from 'react'

const TaskListNumbers = ({ data }) => {
    return (
        <div className='flex mt-10 justify-between gap-5'>
            <div className='w-[45%] py-6 px-9 rounded-xl bg-blue-400'>
                <h2 className='text-3xl font-semibold'>{data.taskNumber.newTask}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='w-[45%] py-6 px-9 rounded-xl bg-green-400'>
                <h2 className='text-3xl font-semibold'>{data.taskNumber.completed}</h2>
                <h3 className='text-xl font-medium'>Completed</h3>
            </div>
            <div className='w-[45%] py-6 px-9 rounded-xl bg-yellow-400'>
                <h2 className='text-3xl font-semibold'>{data.taskNumber.active}</h2>
                <h3 className='text-xl font-medium'>Accepted</h3>
            </div>
            <div className='w-[45%] py-6 px-9 rounded-xl bg-red-400'>
                <h2 className='text-3xl font-semibold'>{data.taskNumber.failed}</h2>
                <h3 className='text-xl font-medium'>Failed</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers