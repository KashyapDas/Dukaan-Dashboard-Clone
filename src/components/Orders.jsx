import React from "react";
import { GrSearch } from "react-icons/gr";
import { useRecoilValue } from "recoil";
import { atomData } from "../atoms/DataAtom";

const Orders = React.memo(() => {
  const rawData = useRecoilValue(atomData);
  console.log("Orders components render...");

  return (
    <div className="w-full h-full flex flex-col">
      {/* Table Container with fixed header */}
      <div className="relative w-full h-full flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10">
          <div className="grid grid-cols-5 gap-4 p-4 font-semibold border-b">
            <div className="2xl:text-xl">Orders</div>
            <div className="2xl:text-xl">Status</div>
            <div className="2xl:text-xl">Transaction Id</div>
            <div className="2xl:text-xl">Refund Date</div>
            <div className="2xl:text-xl">Order Amount</div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {rawData.map((items, index) => (
            <div
              key={index}
              className="grid grid-cols-5 gap-4 p-4 border-b hover:bg-gray-50 cursor-pointer"
            >
              <div className="truncate">{items.orders}</div>
              <div className="truncate">{items.status}</div>
              <div className="truncate">{items.transactionId}</div>
              <div className="truncate">{items.refundDate}</div>
              <div className="truncate">{items.otherAmount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Orders;