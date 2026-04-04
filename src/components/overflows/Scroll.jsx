import React from 'react'

const Scroll = () => {
    return (
        <div>
            <div className='w-100 h-100 relative m-5 bg-lime-400 overflow-scroll'>
                <h1 className='absolute left-90'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sint accusamus perferendis beatae quia aperiam tenetur explicabo similique consequatur ipsam!</h1>
            </div>

            <div className='w-100 h-100 relative m-5 bg-lime-400 overflow-auto'>
                <h1 className='absolute left-90'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, ipsum.</h1>
            </div>
        </div>
    )
}

export default Scroll