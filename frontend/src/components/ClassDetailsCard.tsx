import { EnvelopeIcon, LinkIcon, PhoneIcon } from '@heroicons/react/24/solid'

function ClassDetailsCard() {
    return (
        <div className="flex flex-col items-center gap-5 border border-gray-300 rounded-xl shadow py-8 px-14 bg-blue-100/25">
            <img className='h-16 w-16 rounded-full object-cover p-2 border border-gray-300' src="https://pbs.twimg.com/profile_images/1816958428771749888/f49y3HRM_400x400.png" alt="" />
            <div className="text-2xl font-bold">Sayed Ar Rafi</div>
            <div className='flex flex-col items-center -mt-3'>
                <div className="text-sm text-gray-500">student@gmail.com</div>
                <div className="text-sm text-gray-500">+8801234567890</div>
            </div>
            <div className="w-56 h-20 bg-gray-200 rounded border border-gray-300 text-4xl font-bold flex justify-center items-center">
                00 : 00
            </div>
            <div className="w-56 grid grid-cols-3 gap-5">
                <button className='btn btn-sm btn-neutral btn-outline border-gray-300'>
                    <EnvelopeIcon className='h-5 w-5' />
                </button>
                <button className='btn btn-sm btn-neutral btn-outline border-gray-300'>
                    <PhoneIcon className='h-5 w-5' />
                </button>
                <button className='btn btn-sm btn-neutral btn-outline border-gray-300'>
                    <LinkIcon className='h-5 w-5' />
                </button>
            </div>
            <div className='w-56 grid grid-cols-2 gap-5'>
                <button className="btn btn-info">Start</button>
                <button className="btn btn-error">Finish</button>
            </div>
        </div>
    )
}

export default ClassDetailsCard