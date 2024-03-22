import React, { useState, useEffect } from 'react';
import LOGO from "/src/assets/LOGO.png"


function AdminAssets() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [devices, setDevices] = useState([]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const response = await fetch('http://localhost:8000/3'); 
                if (response.ok) {
                    const data = await response.json();
                    setDevices(data);
                } else {
                    console.error('Failed to fetch devices');
                }
            } catch (error) {
                console.error('Error fetching devices:', error);
            }
        };

        fetchDevices();
    }, []);

    return (
        <div className="relative flex h-screen grow">
       
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img src={LOGO} alt="Logo" className="h-80 w-80 opacity-30" style={{ margin: 'auto' }} />
            </div>

            <div className="flex flex-col flex-1 ml-5">
                <div className="text-lg font-bold pl-4 py-2 text-orange-500">
                    ADMIN (USER)
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full ml-5">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="text-left border px-4 py-2">ID</th>
                                <th className="text-left border px-4 py-2">Name</th>
                                <th className="text-left border px-4 py-2">S/No</th>
                                <th className="text-left border px-4 py-2">Brand</th>
                                <th className="text-left border px-4 py-2">Model</th>
                                <th className="text-left border px-4 py-2">Status</th>
                                <th className="text-left border px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white">
                                <td className="border px-4 py-2">{devices.id}</td>
                                <td className="border px-4 py-2">{devices.name}</td>
                                <td className="border px-4 py-2">{devices.serial}</td>
                                <td className="border px-4 py-2">{devices.brand}</td>
                                <td className="border px-4 py-2">{devices.model}</td>
                                <td className="border px-4 py-2">{devices.status}</td>
                                <td className="border px-4 py-2">
                                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                                        Assign
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminAssets;
