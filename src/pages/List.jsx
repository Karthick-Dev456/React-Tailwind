import React from 'react'

const List = () => {
    return (
        <div>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <hr />

            <ul className='m-5 list-disc'>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <hr />

            <ul className='list-disc list-inside'>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <hr />

            <ul className='m-5 list-disc list-inside marker:text-red-500'>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <hr />

            <ul className='m-5 list-disc list-inside marker:text-red-500 marker:text-lg'>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>

        </div>
    )
}

export default List