import React from 'react';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';
import { IoPencil } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";

const UserPage = () => {
    const users = [
        { name: 'skibidi', status: 'Admin', email: 'bill.gate@example.com', age: 18 },
        { name: 'joemama', status: 'Admin', email: 'depe.weoke@example.com', age: 36 },
        { name: 'Darkness', status: 'Employee', email: 'ren.satir@example.com', age: 24 },
        { name: 'Deepwoken', status: 'Employee', email: 'deew.feey@example.com', age: 32 },
        { name: 'Naruto', status: 'Employee', email: 'dds.samo@example.com', age: 43 },
    ];

    return (
        <><Navbar /><div className="flex">
            <Sidebar />
            <div className="p-6 bg-gray-100 flex-1">
                <div className="flex justify-between items-center mb-14">
                    <h1 className="text-2xl font-semibold text-customBlue">All User</h1>
                    <button
                        className="px-6 py-1 text-customBlue rounded-md border-customBlue border hover:bg-blue-700 transition-colors"
                    >
                        Add
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow">
                    <table className="w-full pt-4">
                        <thead>
                            <tr className="border-b pb-6 bg-gray-400">
                                <th className="px-3 py-1 text-left font-bold text-customBlue"></th>
                                <th className="px-3 py-1 text-left font-bold text-customBlue"></th>
                                <th className="px-3 py-1 text-left font-bold text-customBlue">Name</th>
                                <th className="px-3 py-1 text-left font-bold text-customBlue">Access Status</th>
                                <th className="px-3 py-1 text-left font-bold text-customBlue">Email</th>
                                <th className="px-3 py-1 text-left font-bold text-customBlue">Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} className="border-b last:border-b-0">
                                    <td className=" py-4 px-4">
                                        <IoPencil className="cursor-pointer" />
                                    </td>
                                    <td className=" py-4 px-4 "><FaTrash className="cursor-pointer" /> </td>
                                    <td className="px-3 py-4">{user.name}</td>
                                    <td className="px-3 py-4">{user.status}</td>
                                    <td className="px-3 py-4">{user.email}</td>
                                    <td className="px-3 py-4">{user.age}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div></>
    );
};

export default UserPage;
