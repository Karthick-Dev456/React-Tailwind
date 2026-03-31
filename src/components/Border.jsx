import React from 'react'

const Border = () => {
    return (
        <div>
            <h1 className='border m-5'>Border</h1>

            <h1 className='border-5 m-5'>Border</h1>

            <h1 className='border-2 border-emerald-400 m-5'>Colored Border</h1>

            <h1 className='border-2 border-dashed m-5'>Dashed Styled Border</h1>

            <h1 className='border-2 border-dotted m-5'>Dotted Styled Border</h1>

            <h1 className='border-x-2 m-5'>Left and Right Border</h1>

            <h1 className='border-y-2 m-5'>Top and Bottom Border</h1>

            <h1 className='border-t-2 m-5'>Top Border</h1>

            <h1 className='border-b-2 m-5'>Bottom Border</h1>

            <h1 className='border-l-2 m-5'>Left Border</h1>

            <h1 className='border-r-2 m-5'>Right Border</h1>

            <h1 className='border-2 rounded-lg m-5'>Rounded Border</h1>

            <h1 className='border-2 border-cyan-500 m-5 outline-2 outline-fuchsia-700'>Outline</h1>

            <h1 className='border-2 border-cyan-500 m-5 outline-2 outline-fuchsia-700 outline-offset-5'>Outline with Offset</h1>

            <h1 className='border-2 border-cyan-500 mx-5 my-10 outline-2 outline-fuchsia-700 outline-offset-10 ring-5 ring-green-600 ring-offset-3'>Outline and Ring with Offsets</h1>

        </div>
    )
}

export default Border