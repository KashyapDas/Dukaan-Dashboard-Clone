import React from "react";
import { GrSearch } from "react-icons/gr";

function Orders() {
  return (
    <div className=" h-screen w-screen flex flex-col gap-y-4 mt-5">
      <div className="flex items-center w-[60vw] bg-white rounded-md ml-2 border-2 border-solid border-black">
        <GrSearch className=" bg-white text-xl rounded-md ml-2" />
        <input
          className="w-full p-2 rounded-md"
          type="text"
          name="orderSearch"
          id="orderSearch"
          placeholder="Order ID or Transactions ID"
        />
      </div>

      <div className="w-full overflow-x-auto ml-2">

        <div className="min-w-[800px]">

          <div className="grid grid-cols-5 gap-4 mb-3">
            <h1 className="text-xl truncate ">Orders</h1>
            <h1 className="text-xl truncate ">Status</h1>
            <h1 className="text-xl truncate ">Transaction Id</h1>
            <h1 className="text-xl truncate ">Refund Date</h1>
            <h1 className="text-xl truncate ">Order Amount</h1>
          </div>

        {/* Map the json */}
          <div className="grid grid-cols-5 gap-4">
            <h1 className="text-md truncate ">Orders</h1>
            <h1 className="text-md truncate ">Status</h1>
            <h1 className="text-md truncate ">Transaction Id</h1>
            <h1 className="text-md truncate ">Refund Date</h1>
            <h1 className="text-md truncate ">Order Amount</h1>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <h1 className="text-md truncate ">Orders</h1>
            <h1 className="text-md truncate ">Status</h1>
            <h1 className="text-md truncate ">Transaction Id</h1>
            <h1 className="text-md truncate ">Refund Date</h1>
            <h1 className="text-md truncate ">Order Amount</h1>
          </div>
          

        </div>

      </div>





    </div>
  );
}

export default Orders;

{
  /* <div className='flex gap-x-9 '>
                <h1 className='text-md  bg-yellow-400'>Orders</h1>
                <h1 className='text-md'>Status</h1>
                <h1 className='text-md'>Trasaction Id</h1>
                <h1 className='text-md'>Refund Date</h1>
                <h1 className='text-md'>Order Amount</h1>
            </div> */
}
