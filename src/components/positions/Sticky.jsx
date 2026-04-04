import React from 'react'

const Sticky = () => {
    return (
        <div>
            <header>Code Camp Tamil</header>

            <nav className='sticky top-0'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Sticky