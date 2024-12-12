import React from 'react';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';
import { IoPencil } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import Link from 'next/link';
const InventoryPage = () => {
    const inventory = [
        { productName: 'HP', seriesNo: 'TJ0023',category:'', condition:'', LocStorage:'' },
        { productName: 'Minuman', seriesNo: 'TJ0102',category:'', condition:'', LocStorage:'' },
        { productName: 'Laptop', seriesNo: 'TJ0051',category:'', condition:'', LocStorage:'' },
        { productName: 'Motor', seriesNo: 'TJ3122',category:'', condition:'', LocStorage:'' },
        { productName: 'Mobil', seriesNo: 'TJ0221',category:'', condition:'', LocStorage:'' },
    ];

    return (
        <><Navbar /><div className="flex">
            <Sidebar />
            <div className="p-6 bg-gray-100 flex-1">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-4xl font-semibold ">Inventory</h1>
                </div>
                <div className="flex justify-between items-center mb-8">
                    <div className="flex space-x-6">
                        <Link href="/inventory">
                            <h1 className=" text-2xl font-semibold cursor-pointer decoration-3">All</h1>
                        </Link>
                        <Link href="/inventoryAdmin">
                            <h1 className=" text-2xl font-semibold underline underline-offset-8">Warehouse</h1>
                        </Link>
                    </div>
                    <button
                        className="px-6 py-1 text-customBlue rounded-md border-customBlue border border-sky-500 text-sky-500"
                    >
                        Add
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow">
                    <table className="w-full pt-4">
                        <thead>
                            <tr className="border-b pb-6 bg-gray-400">
                                <th className="px-3 py-3 text-left font-bold text-customBlue"></th>
                                <th className="px-3 py-3 text-left font-bold text-customBlue">Product Name</th>
                                <th className="px-3 py-3 text-left font-bold text-customBlue">Series No.</th>
                                <th className="px-3 py-3 text-left font-bold text-customBlue">Category</th>
                                <th className="px-3 py-3 text-left font-bold text-customBlue">Condition</th>
                                <th className="px-3 py-3 text-left font-bold text-customBlue">Storage Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventory.map((item, index) => (
                                <tr key={index} className="border-b last:border-b-0">
                                    <td className="py-4">
                                        <div className="flex items-center space-x-3">
                                            <IoPencil className="cursor-pointer ml-3 mr-6" />
                                            <FaTrash className="cursor-pointer ml-12" />
                                        </div>
                                    </td>
                                    <td className="px-3 py-4">{item.productName}</td>
                                    <td className="px-3 py-4">{item.seriesNo}</td>
                                    <td className="px-3 py-4">{item.category}</td>
                                    <td className="px-3 py-4">{item.condition}</td>
                                    <td className="px-3 py-4">{item.LocStorage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div></>
    );
};

export default InventoryPage;
