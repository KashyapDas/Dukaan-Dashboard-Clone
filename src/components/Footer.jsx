import React from 'react'
import { FaBasketShopping } from "react-icons/fa6"

const Footer = React.memo(()=> {
    console.log("Footer Components render...");
  return (
    <h1 className='flex items-center justify-center font-semibold text-md mt-1 xl:text-xl xl:mt-3'>Powered by Dukaan <FaBasketShopping className='ml-2'/></h1>
  )
})

export default Footer
