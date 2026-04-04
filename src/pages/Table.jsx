import React from 'react'

const Table = () => {

    const students = [
    {
        id: 1,
        name: "Kishore",
        age: 22,
        course: "Computer Science",
        email: "kishore@example.com"
    },
    {
        id: 2,
        name: "Arun",
        age: 21,
        course: "Mechanical",
        email: "arun@example.com"
    },
    {
        id: 3,
        name: "Priya",
        age: 23,
        course: "Electronics",
        email: "priya@example.com"
    },
    {
        id: 4,
        name: "Divya",
        age: 22,
        course: "Information Tech",
        email: "divya@example.com"
    },
    {
        id: 5,
        name: "Rahul",
        age: 24,
        course: "Civil",
        email: "rahul@example.com"
    }
    ];

    return (
        <div>
            <table className='border border-gray-300 m-5'>
                <thead>
                    <tr>
                            <th className='border border-gray-300 px-4 py-2'>ID</th>
                            <th className='border border-gray-300 px-4 py-2'>Name</th>
                            <th className='border border-gray-300 px-4 py-2'>Age</th>
                            <th className='border border-gray-300 px-4 py-2'>Course</th>
                            <th className='border border-gray-300 px-4 py-2'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id} className='odd:bg-white even:bg-gray-100'>
                            <td className='border border-gray-300 px-4 py-2'>{student.id}</td>
                            <td className='border border-gray-300 px-4 py-2'>{student.name}</td>
                            <td className='border border-gray-300 px-4 py-2'>{student.age}</td>
                            <td className='border border-gray-300 px-4 py-2'>{student.course}</td>
                            <td className='border border-gray-300 px-4 py-2'>{student.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table