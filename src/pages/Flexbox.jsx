import React from 'react'

const Flexbox = () => {
    const BOX = "w-50 h-50 bg-red-300"

    // flex-row, flex-row reverse, flex-col, flex-col-reverse, gap

    // justify - ( start, center, end, around, evenly, between )

    // items - ( start, center, end )

    // flex - ( wrap, wrap-reverse ) and content - ( start, center, end )

    // flex and grow

    return (
        <div className=''>
            <div className={BOX}></div>
            <div className={BOX}></div>
            <div className={BOX}></div>
            <div className={BOX}></div>
        </div>
    )
}

export default Flexbox