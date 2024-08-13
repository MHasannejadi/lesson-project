import React from 'react'
import Navbar from './Navbar'
import Category from './Category'

function Main() {
  return (
    <div>
        <Navbar />
        <div className='w-10/12 py-5 mx-auto my-10 shadow-lg rounded-md border border-[#efefef]'>
        <Category />
        </div>
    </div>
  )
}

export default Main