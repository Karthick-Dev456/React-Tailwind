import React from 'react'
import trees from '../assets/trees.jpg'
import lion from '../assets/lion.jpg'

const Image = () => {

    // Background Image: bg-contain, bg-center

    // Foreground Image: height, width, size, object - (contain, cover, fill, top, left, right, bottom)

    return (
        // <div style={{backgroundImage: `url(${trees})`}} className='h-screen bg-cover'>
        <div>
            
            <img src={lion} alt="The Lion" />

        </div>
    )
}

export default Image