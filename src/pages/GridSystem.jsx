import React from 'react'

const GridSystem = () => {

    const BOX = "bg-red-300 text-3xl"

    // col-span-value and row-span-value

    return (
        <div className='grid grid-cols-3 gap-1'>
            <div className={BOX}>1</div>
            <div className={BOX + ' col-span-2'}>2</div>
            <div className={BOX + ' row-span-2'}>3</div>
            <div className={BOX}>4</div>
            <div className={BOX}>5</div>
            <div className={BOX}>6</div>
            <div className={BOX}>7</div>
            <div className={BOX}>8</div>
            <div className={BOX}>9</div>
        </div>
    )
}

export default GridSystem