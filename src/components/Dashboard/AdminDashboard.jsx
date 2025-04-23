import React from 'react'
import Header from '../Layouts/Header'
import CreateTask from '../Layouts/CreateTask'
import AllTask from '../Layouts/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-10'>
            <Header changeUser={props.changeUser}/>
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard