import React from "react";
import { GrSearch } from "react-icons/gr";
import { useRecoilValue } from "recoil";
import { atomData } from "../atoms/DataAtom";

const Orders=React.memo(()=>{

    const rawData = useRecoilValue(atomData);
    console.log("Orders components render...");

  return (
    <div className=" h-fit w-screen flex flex-col gap-y-4 mt-5">
      <div className="flex items-center w-[60vw] bg-white rounded-md ml-2 border-2 border-solid border-black">
        <GrSearch className=" bg-white text-xl rounded-md ml-2" />
        <input
          className="w-full p-2 rounded-md border-none outline-none"
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
            
            {rawData.map((items,index)=>(
                    <div key={index} className="grid grid-cols-5 gap-4">
                        <h1 className="text-sm truncate ">{items.orders}</h1>
                        <h1 className="text-sm truncate ">{items.status}</h1>
                        <h1 className="text-sm truncate ">{items.transactionId}</h1>
                        <h1 className="text-sm truncate ">{items.refundDate}</h1>
                        <h1 className="text-sm truncate ">{items.otherAmount}</h1>
                  </div>
            ))}
        
        

        </div>

      </div>





    </div>
  );
})

export default Orders;


