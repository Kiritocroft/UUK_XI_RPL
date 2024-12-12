import React from 'react';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';
import { IoPencil } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import Link from 'next/link';
const InventoryPage = () => {
    const inventory = [
        { productName: 'Table', seriesNo: 'TJ0001', items: 25, purchaseDate: '11 Januari 2022', unitPrice: '450.000' },
        { productName: 'Chair', seriesNo: 'TJ0002', items: 66, purchaseDate: '11 Januari 2022', unitPrice: '325.000' },
        { productName: 'Laptop', seriesNo: 'TJ0015', items: 120, purchaseDate: '21 Juni 2022', unitPrice: '11.750.000' },
        { productName: 'Monitor', seriesNo: 'TJ1212', items: 20, purchaseDate: '15 April 2022', unitPrice: '12.335.000' },
        { productName: 'Keyboard', seriesNo: 'TJ0021', items: 15, purchaseDate: '24 Desember 2024', unitPrice: '357.600' },
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
                            <h1 className=" text-2xl font-semibold underline underline-offset-8 cursor-pointer decoration-3">All</h1>
                        </Link>
                        <Link href="/inventoryAdmin">
                            <h1 className=" text-2xl font-semibold ">Warehouse</h1>
                        </Link>
                    </div>
                    <button
                        className="px-7 py-2 rounded-md border border-sky-500 text-sky-500 font-bold"
                    >
                        Add
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow">
                    <table className="w-full pt-4">
                        <thead>
                            <tr className="border-b pb-6 bg-gray-400 py-6">
                                <th className="px-3 py-3 text-left font-bold "></th>
                                <th className="px-3 py-3 text-left font-bold ">Product Name</th>
                                <th className="px-3 py-3 text-left font-bold ">Series No.</th>
                                <th className="px-3 py-3 text-left font-bold ">Items</th>
                                <th className="px-3 py-3 text-left font-bold ">Purchase Date</th>
                                <th className="px-3 py-3 text-left font-bold ">Unit Price</th>
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
                                    <td className="px-3 py-4">{item.items}</td>
                                    <td className="px-3 py-4">{item.purchaseDate}</td>
                                    <td className="px-3 py-4">{item.unitPrice}</td>
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
