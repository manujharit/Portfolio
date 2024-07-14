import React from 'react'

const PageHeading = ({ head }) => {
  return (
    <span className='text-5xl font-bold my-[2%] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>{head}</span>
  )
}

export default PageHeading