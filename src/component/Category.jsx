import React from 'react'
import RepairsSection from './RepairsSection'
import repairsData from './data/repairsData'
function Category() {
    
  return (
    <div className='w-11/12 mx-auto flex flex-col space-y-7'
    >
        <h1 className='font-bold text-xl'>دسته: تعمیرات</h1>
        {
            repairsData.map((data)=>(
                <div key={data.id}>
                    <RepairsSection data={data} />
                </div>
            ))
        }
    </div>
  )
}

export default Category