import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../other/TaskList'

const employeeDashboard = (props) => {
  
  return (
    <div className='p-10 bg-[#111827] h-full sm:h-screen  w-screen'>
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNumber data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}

export default employeeDashboard