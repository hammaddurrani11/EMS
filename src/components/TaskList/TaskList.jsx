import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div id="tasklist" className='h-[55%] w-full overflow-x-auto flex items-center flex-nowrap justify-start gap-5 py-10 mt-10'>
      {data.tasks.map((e, idx) => {
        if (e.active) {
          return <AcceptTask key={idx} />
        }
        if (e.newTask) {
          return <NewTask key={idx} />
        }
        if (e.completed) {
          return <CompleteTask key={idx} />
        }
        if (e.failed) {
          return <FailedTask key={idx} />
        }
      })}
    </div>
  )
}

export default TaskList