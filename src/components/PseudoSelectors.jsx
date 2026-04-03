import React from 'react'

const PseudoSelectors = () => {
    return (
        <div>

            <button className="bg-blue-500 text-white hover:bg-red-700">
                Click me
            </button> <br /><br />

            <button className="bg-blue-500 text-white active:scale-80">
                Click me
            </button> <br /><br />

            <form>
                <input className='focus-ring-2' type="text" placeholder='Enter your name'/> <br /><br />

                <input disabled className='disabled:cursor-not-allowed' type="text" placeholder='Enter your Address'/>
            </form>

        </div>
    )
}

export default PseudoSelectors