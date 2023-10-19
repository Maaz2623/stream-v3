import React from 'react'
import Link from 'next/link'

const Topbar = () => {
  return (
    <div className='h-auto opacity-95 flex text-2xl text-white z-10 justify-between items-center px-2 py-1 bg-black/70'>
        <Link href={'/'} className='font-bold text-3xl'>Stream</Link>
        <h1 className='text-lg'>Enjoy Kanka!</h1>
    </div>
  )
}

export default Topbar