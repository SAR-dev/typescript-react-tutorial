import React from 'react'

function App() {
  return (
    <div className='p-5 bg-gray-100 h-screen w-full flex items-center justify-center'>
      <div className="rounded-lg border border-gray-300 p-5 w-96 bg-white shadow">
          <div className="text-2xl font-semibold text-center">Welcome Back 😊</div>
          <div className="opacity-75 text-center">We have missed you so much !!</div>
          <div className="mt-8 flex flex-col gap-5">
            <input type="text" className='input input-bordered' placeholder='Email address' />
            <input type="text" className='input input-bordered' placeholder='Password' />
            <button className="btn btn-accent">Sign In</button>
          </div>
      </div>
    </div>
  )
}

export default App