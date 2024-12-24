import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../other/TaskList'

const employeeDashboard = () => {
  return (
    <div className='p-10 bg-[#111827] h-full sm:h-screen  w-screen'>
        <Header />
        <TaskListNumber />
        <TaskList />
    </div>
  )
}

export default employeeDashboard