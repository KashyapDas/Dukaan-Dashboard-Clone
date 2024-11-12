import React from 'react'
import Orders from './Orders'
import { RecoilRoot } from 'recoil'

const Transaction=React.memo(()=> {
  console.log("Transaction Component Render...");


  return (
    <div className='w-screen xl:w-full flex flex-col gap-y-2'>
       
       <h1 className='text-2xl mt-2 font-ligth p-2 xl:text-4xl xl:font-medium 2xl:text-3xl 2xl:mb-4 2xl:mt-2'>Transactions | This Month </h1>
       <div className='flex gap-x-5 ml-2 mb-5'>
        <button className='bg-slate-200 hover:bg-blue-950 hover:text-white p-1 px-5 text-center text-lg
        font-semibold rounded-full'>Payouts (22)</button>
        <button className='bg-slate-200 hover:bg-blue-950 hover:text-white p-1 px-6 text-center text-lg font-semibold rounded-full'>Refunds (6)</button>
       </div>
      {/* Orders Sections */}
      <RecoilRoot>
        <Orders/>
      </RecoilRoot>

    </div>
  )
})

export default Transaction
