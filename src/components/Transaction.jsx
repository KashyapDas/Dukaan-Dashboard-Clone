import React from 'react'

function Transaction() {
  return (
    <div className='w-screen h-screen bg-red-200 pl-1 flex flex-col gap-y-2'>
       <h1 className='bg-yellow-100 text-2xl mt-2 font-ligth p-2'>Transactions | This Month </h1>
       <div className='flex gap-x-3'>
        <button className='bg-slate-200 hover:bg-blue-950 hover:text-white p-1 px-6 text-center text-lg font-semibold rounded-full'>Payouts (22)</button>
        <button className='bg-slate-200 hover:bg-blue-950 hover:text-white p-1 px-6 text-center text-lg font-semibold rounded-full'>Refunfs (6)</button>
       </div>
    </div>
  )
}

export default Transaction
