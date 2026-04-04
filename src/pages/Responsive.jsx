import React from 'react'

const Responsive = () => {

    const BOX = "w-50 h-50 bg-red-300"

    return (
        <div>
            <h1 className='text-xs font-bold text-center sm:text-lg sm:text-red-500 md:text-xl md:text-green-500 lg:text-2xl lg:text-purple-500 xl:text-black'>Full Stack Development</h1>


            {/* <div className='flex gap-1 flex-col items-center md:flex-row md:justify-center'>
                <div className={BOX}></div>
                <div className={BOX}></div>
                <div className={BOX}></div>
                <div className={BOX}></div>
            </div> */}

            <div className='grid gap-1 place-items-center md:grid-cols-2 md:justify-center lg:grid-cols-3'>
                <div className={BOX}></div>
                <div className={BOX}></div>
                <div className={BOX}></div>
                <div className={BOX}></div>
            </div>
        </div>
    )
}

export default Responsive