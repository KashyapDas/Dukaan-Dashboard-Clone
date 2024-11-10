import React from 'react'
import Orders from './Orders'

function Transaction() {
  return (
    <div className='w-screen bg-red- flex flex-col gap-y-2'>
       
       <h1 className='text-2xl mt-2 font-ligth p-2'>Transactions | This Month </h1>
       <div className='flex gap-x-5 ml-2'>
        <button className='bg-slate-200 hover:bg-blue-950 hover:text-white p-1 px-5 text-center text-lg font-semibold rounded-full'>Payouts (22)</button>
        <button className='bg-slate-200 hover:bg-blue-950 hover:text-white p-1 px-6 text-center text-lg font-semibold rounded-full'>Refunds (6)</button>
       </div>
      {/* Orders Sections */}
      <Orders/>

    </div>
  )
}

export default Transaction
