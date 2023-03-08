import React from 'react'

function Button(props) {
  return (
    <div className='bg-[#4B2A63] text-white px-14 py-6'>
        <p>{props.title}</p>
    </div>
  )
}

export default Button