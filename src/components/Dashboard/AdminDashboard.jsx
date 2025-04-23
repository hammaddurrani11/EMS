import React from 'react'
import Header from '../Layouts/Header'
import CreateTask from '../Layouts/CreateTask'
import AllTask from '../Layouts/AllTask'

const AdminDashboard = () => {
    return (
        <div className='h-screen w-full p-10'>
            <Header />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard