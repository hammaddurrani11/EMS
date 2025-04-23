import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const userData = useContext(AuthContext);
    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>
            <div className='bg-red-400 mb-2 py-2 px-4 flex items-center justify-between rounded'>
                <h2 className='w-1/5'>Employee Name</h2>
                <h3 className='w-1/5'>New Task</h3>
                <h5 className='w-1/5'>Active Task</h5>
                <h5 className='w-1/5'>Completed</h5>
                <h5 className='w-1/5'>Failed</h5>
            </div>
            <div>
                {userData.employees.map((elem, idx) => {
                    return <div key={idx} className='bg-transparent hover:bg-emerald-500 border-emerald-500 border-[1px] mb-2 py-2 px-4 flex items-center justify-between rounded'>
                        <h2 className='w-1/5 text-white'>{elem.firstName}</h2>
                        <h3 className='w-1/5 text-blue-600'>{elem.taskNumber.newTask}</h3>
                        <h5 className='w-1/5 text-yellow-400'>{elem.taskNumber.active}</h5>
                        <h5 className='w-1/5 text-purple-400'>{elem.taskNumber.completed}</h5>
                        <h5 className='w-1/5 text-red-400'>{elem.taskNumber.failed}</h5>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllTask