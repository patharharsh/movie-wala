import React, { ReactNode } from 'react'
import "./Text3d.css"

const Text3d = ({children, className}: {children: ReactNode, className?: string}) => {
  return (
    <div className={`css-3d-text ${className}`}>
      {children}
    </div>
  )
}

export default Text3d
