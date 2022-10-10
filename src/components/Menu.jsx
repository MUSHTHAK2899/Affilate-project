import React from 'react'

const Menu = () => {

  return (
    <>
    <nav className='flex md:hidden absolute  top-[150px]'>
        <div className='w-full h-full bg-white z-20 pl-10 pr-20 p-5 '>
          <div className='flex justify-center gap-44'>
                <button className='font-bold text-sky-500 tracking-wider'>Menu</button>
                <button className='font-bold text-sky-500 tracking-wider'>
                    Account
                </button>
            </div>
            <div className="mt-5 grid grid-flow-row gap-y-3">
                    <div className='mh'>Home</div>
                    <div className='mh'>CATEGORIES</div>
                    <div className='mh'>PRODUCTS</div>
                    <div className='mh'>PAGES</div>
                    <div className='mh'>FEATURES</div>
                    <div className='mh'>BOLG</div>
                    <div className='mh'>ABOUT US</div>
                </div>
        

               
        </div>
    </nav>
    </>
  )
}

export default Menu