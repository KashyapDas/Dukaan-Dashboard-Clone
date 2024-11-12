import React from 'react'
import Cards from './Cards'

const Overview=React.memo(()=> {
  console.log("Overview Components Render...");
  return (
    <div className='w-full p-1 flex flex-col gap-y-5 '>
      <h1 className='text-3xl font-light mt-3 ml-1 xl:text-5xl xl:font-medium 2xl:text-3xl'>Overview</h1>
      <div className='flex flex-col gap-y-5 lg:grid lg:grid-cols-2 lg:gap-5'>
        <Cards title="Next Payout" desc="$ 2,312.23" orders="23 orders" />
        <Cards title="Amount Pending" desc="$ 92,312.20" orders="13 orders" />
        <Cards title="Amount Processed" desc="$ 23,92,312.19" orders="3 orders" />
      </div>
      
    </div>
  )
})

export default Overview
