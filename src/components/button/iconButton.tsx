import React, { ReactNode } from 'react'

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children : ReactNode

}

const IconButton = ({children, ...props}: IconButtonProps) => {
  return (
    <button className='p-3 border-grey-400 border focus-within:outline-none rounded-full hover:bg-[#4ECCA3] hover:border-[#4ECCA3] transition-all hover:transition-all  hover:text-[#1a202c]' {...props}>{children}</button>
  )
}

export default IconButton
