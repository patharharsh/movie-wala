import React, { ReactNode } from 'react'
import { RiMovie2Line } from "react-icons/ri";

const SectionTitle = ({children} : {children: ReactNode}) => {
  return (
    <div className='my-5'>
      <h1 className='text-[36px] font-bold flex items-center gap-2 '>  <span className='text-[#4ECCA3] text-[38px]'><RiMovie2Line /></span>{children}</h1>
    </div>
  )
}

export default SectionTitle
