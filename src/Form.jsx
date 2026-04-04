import React from 'react'

const Form = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-5">

                <h2 className="text-2xl font-semibold text-center">Register</h2>

                {/* Name */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Name</label>
                    <input 
                        type="text" 
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                    />
                </div>

                {/* Username */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Username</label>
                    <input 
                        type="text" 
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter username"
                    />
                </div>

                {/* Password */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Password</label>
                    <input 
                        type="password" 
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter password"
                    />
                </div>

                {/* Age */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Age</label>
                    <input 
                        type="number" 
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Date */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Date of Birth</label>
                    <input 
                        type="date" 
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Button */}
                <button 
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Submit
                </button>

            </form>
        </div>
    )
}

export default Form