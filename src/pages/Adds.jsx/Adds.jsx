import React from 'react'
import { adds } from '../../components/Data'

const Adds = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-3 pl-20 gap-5'>
        {
            adds.map((items,index)=>{
                return(
                    <div className='' key={index}>
                       <div>
                       <img className='' src={items.image1} alt="" />
                       </div>
                       <div>
                       <img className='w-full' src={items.image2} alt="" />
                       </div>
                      <div>
                      <img src={items.image3} alt="" />
                      </div>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Adds