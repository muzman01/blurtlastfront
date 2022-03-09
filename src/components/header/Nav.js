import React from 'react'

export default function Nav() {
  return (
    <div className='flex justify-between p-2 navborder bg-white'>
        <div className='ml-36 text-3xl mt-2'>BLURTD</div>
        <div className='mr-36 mt-2'>
        <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
            <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
            
    </div>
        </div>
    </div>
  )
}
