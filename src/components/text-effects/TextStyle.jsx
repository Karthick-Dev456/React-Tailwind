import React from 'react'

const TextStyle = () => {

    const text_size = ['xs', 'sm', 'base', 'lg', 'xl', '....9xl']

    return (
        <div>
            <h1>This is a React js project</h1>
            <h1 className='text-xl'>This is a React js project</h1>
            <h1 className='font-light'>This is a React js project</h1>
        </div>
    )
}

export default TextStyle