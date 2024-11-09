import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function Navbar() {
    return (
        <nav className='h-14 border-b border-gray-300 w-full flex items-center px-5'>
            <div className="text-xl font-bold text-blue-500">ClassBuzz</div>
            <div className='flex gap-5 ml-auto'>
                <label className="input input-sm input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search Student" />
                    <MagnifyingGlassIcon className='h-4 w-4' />
                </label>
                <button className='btn btn-sm btn-square border border-gray-300'>🤖</button>
                <button className='btn btn-sm btn-square border border-gray-300'>👨‍🏫</button>
            </div>
        </nav>
    )
}

export default Navbar