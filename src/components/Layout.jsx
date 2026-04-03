import React from 'react'
import dog from '../assets/dog.jpg'

const Layout = () => {
    return (
        <div>
            {/* <img src={dog} alt="The Dog" className='size-40 aspect-9/16' /> */}

            {/* <img src={dog} alt="The Dog" className='w-120 h-140 object-contain object-bottom-right' /> */}

            {/* <div className='bg-amber-300 size-100'></div> */}

            {/* <div className='columns-3'>
                <div>Javascript</div>
                <div>Typescript</div>
                <div className='break-before-column'>Angular</div>
                <div>Python</div>
                <div className='break-after-column'>Django</div>
                <div>Flask</div>
                <div>FastAPI</div>
            </div> */}

            {/* <div className='size-80 bg-amber-500 m-5 p-5 border-5 box-content'>
                <h1>Javascript</h1>
            </div> */}
{/* 
            <div className='size-80 bg-amber-600  m-5 p-5 border-5 box-border'>
                <h1>Javascript</h1>
            </div> */}


            <div className='h-screen gap-1 bg-amber-300 flex justify-between flex-wrap content-start'>
                <div className='box'>Javascript</div>
                <div className='box'>Typescript</div>
                <div className='box'>Angular</div>
                <div className='box'>Python</div>
                <div className='box'>Django</div>
                <div className='box'>Flask</div>
                <div className='box'>FastAPI</div>
                <div className='box'>Javascript</div>
                <div className='box'>Typescript</div>
                <div className='box'>Angular</div>
                <div className='box'>Python</div>
                <div className='box'>Django</div>
                <div className='box'>Flask</div>
                <div className='box'>FastAPI</div>
                <div className='box'>Javascript</div>
                <div className='box'>Typescript</div>
                <div className='box'>Angular</div>
                <div className='box'>Python</div>
                <div className='box'>Django</div>
                <div className='box'>Flask</div>
                <div className='box'>FastAPI</div>
            </div>

        </div>
    )
}

export default Layout