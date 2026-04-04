import React from 'react'

const ZIndex = () => {
    return (
        <div>
            <h1 className='relative bg-purple-400 p-5 z-1'>Element 1</h1>
            <h1 className='relative bg-amber-400 p-5 -top-10'>Element 2</h1>
        </div>
    )
}

export default ZIndex