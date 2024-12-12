"use client"

import React, { useState } from 'react';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';

const UpdatePage = () => {
  const [formData, setFormData] = useState({
    Name: '',
    NumberOfItems: '',
    PurhaseDate: '',
    UnitPrice: '',
    type: 'Good'
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen">
      <Navbar/>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gray-50">
          <div className="max-w-5xl mx-auto p-8">
            <div className="bg-white rounded-lg shadow-md p-12">
            <div className="text-center mb-12">
                <h1 className="text-5xl  font-semibold mb-6">Add Product</h1>
                <div className="w-full border-b border-gray-300"></div>
              </div>
              
              <div className="flex justify-center gap-32">
                <div className="w-40 pt-1">
                  <h2 className="text-xl font-medium">Account</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="w-[500px]">
                  <div className="space-y-5">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="w-full p-3 border border-gray-200 rounded-md bg-gray-100"
                        value={formData.Name}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="w-full p-3 border border-gray-200 rounded-md bg-gray-100"
                        value={formData.NumberOfItems} 
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email ID"
                        className="w-full p-3 border border-gray-200 rounded-md bg-gray-100"
                        value={formData.PurhaseDate}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full p-3 border border-gray-200 rounded-md bg-gray-100"
                        value={formData.UnitPrice}
                        onChange={handleChange}
                      />
                    </div>


                    <div className="mt-6">
                      <p className="mb-3 text-gray-700">Type</p>
                      <div className="flex gap-8">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="type"
                            value="Good"
                            checked={formData.type === 'Good'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          Good
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="type"
                            value="Damaged"
                            checked={formData.type === 'Damaged'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          Bad
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className="mt-10 flex justify-center">
                <button
                  onClick={handleSubmit}
                  className="w-64 bg-sky-400 text-white py-1 text-3xl rounded-full px-12"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;