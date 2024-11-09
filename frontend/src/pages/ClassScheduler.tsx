import React from 'react'
import Navbar from '../components/Navbar'
import { InformationCircleIcon } from '@heroicons/react/24/solid'

function ClassScheduler() {
  return (
    <div>
      <Navbar />
      <div className="w-full p-10">
        <div className="flex flex-col gap-8">
          <div>
            <div className='flex items-center gap-2 mb-3'>
              <InformationCircleIcon className='h-5 w-5 text-yellow-500' />
              Select a student
            </div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>Select Student</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div>
            <div className='flex items-center gap-2 mb-3'>
              <InformationCircleIcon className='h-5 w-5 text-blue-500' />
              Select the weekdays you want to take classes
            </div>
            <div className="grid grid-cols-4 gap-5 w-[60rem]">
              <button className='btn h-32 text-4xl font-bold bg-transparent border-gray-300'>SAT</button>
              <button className='btn h-32 text-4xl font-bold bg-transparent border-gray-300'>SUN</button>
              <button className='btn h-32 text-4xl font-bold bg-transparent border-gray-300'>MON</button>
              <button className='btn h-32 text-4xl font-bold bg-transparent border-gray-300'>TUE</button>
              <button className='btn h-32 text-4xl font-bold bg-transparent border-gray-300'>WED</button>
              <button className='btn h-32 text-4xl font-bold bg-transparent border-gray-300'>THU</button>
              <button className='btn h-32 text-4xl font-bold bg-transparent border-gray-300'>FRI</button>
            </div>
          </div>
          <div className='flex items-center gap-5 w-[60rem]'>
            <input type="text" className='input input-bordered' placeholder='Start date' />
            <input type="text" className='input input-bordered' placeholder='Finish date' />
            <button className="btn btn-neutral ml-auto">Generate Schedule</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassScheduler