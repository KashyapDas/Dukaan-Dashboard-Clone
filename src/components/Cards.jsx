import React from 'react'
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import style from "./regular.module.css"

const Cards = React.memo(({title,desc,orders})=> {
  console.log("Cards Component render...");
  return (
    <div className='hover:bg-black hover:text-white bg-slate-100 text-black shadow-md  rounded-md'>
      <h1 className='flex items-center p-2 min-h-20 text-2xl font-semibold'>{title}<AiOutlineQuestionCircle className='ml-2'/></h1>
      <div className='flex items-center justify-between min-h-28'>
          <h1 className='text-4xl font-bold p-2'>{desc}</h1>
          <h2 className={`flex items-center justify-center text-lg font-semibold ${style.underline}`}>{orders} <IoIosArrowForward/></h2>
      </div>

    </div>
  )
})

export default Cards
