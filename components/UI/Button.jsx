import React from 'react'

const Button = ({className, children}) => {
  return (
    <div className={`${className} button`}>
        {children}
    </div>
  )
}

export default Button