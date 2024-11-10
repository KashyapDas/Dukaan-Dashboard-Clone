import React from 'react'
import Cards from './Cards'

function Overview() {
  return (
    <div className='w-full p-1 flex flex-col gap-y-5 '>
      <h1 className='text-3xl font-light mt-3 ml-1'>Overview</h1>
      <Cards title="Next Payout" desc="$ 2,312.23" orders="23 orders" />
      <Cards title="Amount Pending" desc="$ 92,312.20" orders="13 orders" />
      <Cards title="Amount Processed" desc="$ 23,92,312.19" orders="3 orders" />
    </div>
  )
}

export default Overview
