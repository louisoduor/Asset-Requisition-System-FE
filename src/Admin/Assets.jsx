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
                const response = await fetch('http://localhost:8000/get-all-assets');
                if (response.ok) {
                    const data = await response.json();
                    console.log('Fetched devices:', data);
                    // Convert object to array
                    const devicesArray = Object.values(data);
                    setDevices(devicesArray);
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
                            </tr>
                        </thead>
                        <tbody>
                            {devices.map(device => (
                                <tr className="bg-white" key={device.id}>
                                    <td className="border px-4 py-2">{device.id}</td>
                                    <td className="border px-4 py-2">{device.name}</td>
                                    <td className="border px-4 py-2">{device.serial}</td>
                                    <td className="border px-4 py-2">{device.brand}</td>
                                    <td className="border px-4 py-2">{device.model}</td>
                                    <td className="border px-4 py-2">{device.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminAssets;
