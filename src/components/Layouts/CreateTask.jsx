import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const [userData, setUserData] = useContext(AuthContext);

    const submitHandler = (e) => {
        e.preventDefault();

        const newTask = {
            title,
            date,
            category,
            description,
            active: true,
            complete: false,
            failed: false,
            newTask: true
        }

        const data = userData

        data.forEach((elem) => {
            if (employeeName == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskNumber.newTask = elem.taskNumber.newTask + 1
            }
        })
        setUserData(data);

        console.log(data);

        setTitle('')
        setDate('')
        setEmployeeName('')
        setCategory('')
        setDescription('')
    }
    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={submitHandler} className='flex w-full flex-wrap items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-1'>Task Title</h3>
                        <input value={title} onChange={(e) => setTitle(e.target.value)}
                            className='text-sm py-2 px-2 w-4/5 rounded outline-0 bg-transparent border-[1px] border-gray-400 mb-4'
                            type='text'
                            placeholder='Make a Design...' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-1'>Date</h3>
                        <input value={date} onChange={(e) => setDate(e.target.value)}
                            className='text-sm py-2 px-2 w-4/5 rounded outline-0 bg-transparent border-[1px] border-gray-400 mb-4'
                            type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-1'>Assign to</h3>
                        <input value={employeeName} onChange={(e) => setEmployeeName(e.target.value)}
                            className='text-sm py-2 px-2 w-4/5 rounded outline-0 bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='Employee Name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-1'>Category</h3>
                        <input value={category} onChange={(e) => setCategory(e.target.value)}
                            className='text-sm py-2 px-2 w-4/5 rounded outline-0 bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='Design, Dev, etc' />
                    </div>
                </div>
                <div className='w-1/2'>
                    <h3 className='text-sm text-gray-300 mb-1'>Description</h3>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)}
                        className='text-sm w-full h-44 py-2 px-2 rounded outline-0 bg-transparent border-[1px] border-gray-400 mb-4'></textarea>
                    <button className='bg-emerald-500 cursor-pointer py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask