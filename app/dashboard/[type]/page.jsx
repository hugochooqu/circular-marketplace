import React from 'react'

const page = async({params}) => {
    
    const type = ((await params)?.type) || '';
  return (
    <div>{type}</div>
  )
}

export default page