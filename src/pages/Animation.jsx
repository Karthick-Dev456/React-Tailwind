import React from 'react'
import loading from '../assets/loading.png'

const Animation = () => {
    return (
        <div className='m-5 space-x-10 space-y-50'>

            <button>Button 1</button>
            <button className='rotate-20'>Button 2</button>
            <button className='scale-150'>Button 3</button>
            <button className='skew-20'>Button 4</button>
            <button className='rotate-20 origin-bottom-left'>Button 5</button>
            <button className='translate-20'>Button 6</button>
            
            <br />

            <button className='animate-spin'>Button 7</button>
            <button className='animate-ping'>Button 8</button>
            <button className='animate-pulse'>Button 9</button>
            <button className='animate-bounce'>Button 10</button>

            <button type="button" disabled>
                <img src={loading} alt="the loading icon" className='inline animate-spin' />
                <span className='ml-1'>Processing…</span>
            </button>

            <br />


            <button className='rounded bg-blue-500 px-2 py-1 text-white hover:bg-violet-500'>Submit</button>

            <button className='rounded bg-blue-500 px-2 py-1 text-white hover:bg-violet-500 transition'>Submit</button>

            <button className='rounded bg-blue-500 px-2 py-1 text-white hover:bg-violet-500 transition delay-500'>Submit</button>

        </div>
    )
}

export default Animation